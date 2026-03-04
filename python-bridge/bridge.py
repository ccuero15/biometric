import asyncio
import websockets
import json
import logging
import threading
import time
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from device_manager import ZKDeviceController

# Configuración de logs premium
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

connected_devices = {}
clients = set()

# --- HTTP SERVER PARA PRUEBAS (DIOS DE PYTHON MODE) ---
class TestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        query = parse_qs(urlparse(self.path).query)
        ip = query.get('ip', [None])[0]
        uid = int(query.get('uid', [1])[0])
        
        if not ip:
            self.send_response(400)
            self.end_headers()
            self.wfile.write(b"Error: Falta parametro 'ip'. Ejemplo: /test?ip=192.168.1.100")
            return

        logging.info(f"[HTTP] Petición de prueba recibida para IP: {ip}")
        
        # Flujo de prueba: Conectar + Enrolar
        controller = ZKDeviceController(device_id=f"TEST_{int(time.time())}", ip=ip)
        res_conn = controller.connect()
        
        message = f"Conexion a {ip}: {res_conn['status']}\n"
        if res_conn['status'] == 'connected':
            res_enroll = controller.enroll_user(uid=uid)
            message += f"Activacion Enrolamiento UID {uid}: {res_enroll['status']}\n"
            message += f"Mensaje: {res_enroll.get('message', res_enroll.get('error'))}\n"
            controller.disconnect()
        else:
            message += f"Error: {res_conn.get('error')}\n"

        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(message.encode('utf-8'))

def run_http_server():
    server = HTTPServer(('localhost', 8766), TestHandler)
    logging.info("HTTP Test Agent iniciado en http://localhost:8766/test?ip=TU_IP")
    server.serve_forever()


# --- BRIDGE LOGIC ---
async def handle_client(websocket):
    """Maneja conexiones entrantes de NodeJS"""
    clients.add(websocket)
    logging.info(f"NodeJS conectado. Clientes activos: {len(clients)}")
    
    try:
        async for message in websocket:
            try:
                data = json.loads(message)
                logging.info(f"Incoming: {data}")
                action = data.get("action")
                device_id = data.get("device_id")
                request_id = data.get("requestId")
                
                loop = asyncio.get_running_loop()
                result = {"status": "error", "message": "Unknown action"}

                if action == "connect_device":
                    result = handle_connect_device(data)
                
                elif action == "start_live_capture":
                    result = handle_start_live_capture(device_id, websocket, loop)
                
                elif action == "get_users":
                    result = handle_get_users(device_id)
                
                elif action == "set_user":
                    result = handle_set_user(device_id, data)
                
                elif action == "delete_user":
                    result = handle_delete_user(device_id, data)
                
                elif action == "get_attendance":
                    result = handle_get_attendance(device_id)
                
                elif action == "enroll_user":
                    result = handle_enroll_user(device_id, data)
                
                elif action == "clear_attendance":
                    result = handle_clear_attendance(device_id)
                
                elif action == "disconnect_device":
                    result = handle_disconnect_device(device_id)

                elif action == "restart_device":
                    result = handle_restart_device(device_id)

                elif action == "START_ENROLL":
                    # Este proceso es largo, lo ejecutamos en un executor para no bloquear el loop,
                    # pero el 'await' asegura que el mensaje de respuesta final de esta acción 
                    # solo se envíe cuando el enrolamiento termine o falle.
                    result = await loop.run_in_executor(None, handle_start_enrollment, device_id, data, websocket, loop)
                
                if request_id:
                    if isinstance(result, dict):
                        result["requestId"] = data.get("requestId")
                
                await websocket.send(json.dumps(result))
                    
            except json.JSONDecodeError:
                await websocket.send(json.dumps({"status": "error", "message": "Invalid JSON"}))
                
    except websockets.exceptions.ConnectionClosed:
        logging.info("NodeJS desconectado")
    finally:
        if websocket in clients:
            clients.remove(websocket)

def handle_connect_device(data):
    # Simplificación: device_id e ip son lo mínimo, el resto usa defaults corregidos en ZKDeviceController
    device_id = data.get("device_id")
    ip = data.get("ip")
    
    if not ip:
        return {"status": "error", "message": "IP is required"}
    
    # Si no hay device_id lo generamos
    if not device_id:
        device_id = ip.replace(".", "_")

    if device_id in connected_devices:
        return {"status": "already_connected", "device_id": device_id}
    
    controller = ZKDeviceController(
        device_id=device_id, 
        ip=ip, 
        port=data.get("port"), 
        password=data.get("password", 0),
        timeout=data.get("timeout")
    )
    result = controller.connect()
    
    if result["status"] == "connected":
        connected_devices[device_id] = controller
    
    return result

def handle_start_live_capture(device_id, websocket, loop):
    if device_id not in connected_devices:
        return {"status": "error", "message": "Device not connected"}
    
    controller = connected_devices[device_id]
    
    def send_to_nodejs(event_data):
        asyncio.run_coroutine_threadsafe(
            websocket.send(json.dumps(event_data)),
            loop
        )
    
    return controller.start_live_capture(send_to_nodejs)

def handle_get_users(device_id):
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].get_users()

def handle_set_user(device_id, data):
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].set_user(
        uid=data["uid"], 
        name=data["name"], 
        user_id=data["user_id"],
        privilege=data.get("privilege", 0),
        password=data.get("password", ""),
        group_id=data.get("group_id", ""),
        card=data.get("card", 0)
    )

def handle_delete_user(device_id, data):
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].delete_user(uid=data["uid"])

def handle_get_attendance(device_id):
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].get_attendance_logs()

def handle_start_enrollment(device_id, data, websocket, loop):
    if device_id not in connected_devices:
        return {"status": "error", "message": "Device not connected"}
    
    uid = data.get("uid")
    if uid is None:
        return {"status": "error", "message": "UID is required"}

    controller = connected_devices[device_id]
    request_id = data.get("requestId")

    final_result = {"status": "error", "message": "Proceso interrumpido"}
    finished_event = threading.Event()

    # Callback para reportar estados intermedios y capturar el resultado final
    def status_callback(status_data):
        nonlocal final_result
        status_data["device_id"] = device_id
        
        # Si es un estado final, lo guardamos para el retorno de la función
        if status_data["status"] in ["enrollment_success", "error"]:
            final_result = status_data
            finished_event.set()
            # No enviamos el final_result por aquí, ya que el loop principal lo enviará 
            # al terminar el 'await loop.run_in_executor'
            return

        # Si es un estado intermedio, lo enviamos como un EVENTO (sin requestId)
        # para que NodeJS lo maneje vía EventEmitter y no cierre la promesa
        status_data["event"] = "enroll_status"
        
        asyncio.run_coroutine_threadsafe(
            websocket.send(json.dumps(status_data)),
            loop
        )

    # Iniciar el proceso (que corre en su propio hilo)
    controller.start_enrollment_process(uid, status_callback)
    
    # "No retorne hasta entregar el hash final o un error explícito"
    # Bloqueamos este hilo (que corre en el executor) hasta que el worker termine
    finished_event.wait(timeout=45) # Timeout de seguridad superior al del hardware

    return final_result

def handle_enroll_user(device_id, data):
    # Mantenemos este para compatibilidad simple, pero START_ENROLL es el preferido ahora
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].start_enrollment_process(data["uid"], lambda x: logging.info(f"Enroll Update: {x}"))

def handle_clear_attendance(device_id):
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].clear_attendance()

def handle_restart_device(device_id):
    if device_id not in connected_devices: return {"status": "error", "message": "Device not connected"}
    return connected_devices[device_id].restart()

def handle_disconnect_device(device_id):
    if device_id in connected_devices:
        controller = connected_devices.pop(device_id)
        return controller.disconnect()
    return {"status": "error", "message": "Device not connected"}

async def main():
    # Iniciar HTTP Server en hilo separado
    http_thread = threading.Thread(target=run_http_server, daemon=True)
    http_thread.start()

    async with websockets.serve(handle_client, "127.0.0.1", 8765):
        logging.info("Python Bridge operando en ws://127.0.0.1:8765")
        await asyncio.Future()

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logging.info("Apagando bridge...")
