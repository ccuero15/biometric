import asyncio
import websockets
import json
import logging
from device_manager import ZKDeviceController

# Configuración de logs para ver qué pasa en tiempo real
logging.basicConfig(level=logging.INFO)

connected_devices = {}
clients = set()

async def handle_client(websocket):
    """Maneja conexiones entrantes de NodeJS"""
    clients.add(websocket)
    logging.info(f"NodeJS conectado. Clientes activos: {len(clients)}")
    
    try:
        async for message in websocket:
            try:
                data = json.loads(message)
                action = data.get("action")
                device_id = data.get("device_id")
                
                # Usamos el loop actual para las tareas
                loop = asyncio.get_running_loop()

                if action == "connect_device":
                    # Ahora es una función normal que llamamos con run_in_executor si fuera lenta, 
                    # pero la mantendremos simple para asegurar conexión
                    result = handle_connect_device(data)
                    await websocket.send(json.dumps(result))
                
                elif action == "start_live_capture":
                    result = handle_start_live_capture(device_id, websocket, loop)
                    await websocket.send(json.dumps(result))
                
                elif action == "get_users":
                    result = handle_get_users(device_id)
                    await websocket.send(json.dumps(result))
                
                elif action == "set_user":
                    result = handle_set_user(device_id, data)
                    await websocket.send(json.dumps(result))
                
                elif action == "get_attendance":
                    result = handle_get_attendance(device_id)
                    await websocket.send(json.dumps(result))
                
                elif action == "disconnect_device":
                    result = handle_disconnect_device(device_id)
                    await websocket.send(json.dumps(result))
                
                else:
                    await websocket.send(json.dumps({"status": "error", "message": f"Unknown action: {action}"}))
                    
            except json.JSONDecodeError:
                await websocket.send(json.dumps({"status": "error", "message": "Invalid JSON"}))
                
    except websockets.exceptions.ConnectionClosed:
        logging.info("NodeJS desconectado")
    finally:
        clients.remove(websocket)

def handle_connect_device(data):
    device_id = data["device_id"]
    ip = data["ip"]
    port = data.get("port", 4370)
    
    if device_id in connected_devices:
        return {"status": "error", "message": "Device already connected"}
    
    controller = ZKDeviceController(device_id, ip, port)
    result = controller.connect()
    
    if result["status"] == "connected":
        connected_devices[device_id] = controller
    
    return result

def handle_start_live_capture(device_id, websocket, loop):
    if device_id not in connected_devices:
        return {"status": "error", "message": "Device not connected"}
    
    controller = connected_devices[device_id]
    
    # Callback thread-safe para enviar datos a Node
    def send_to_nodejs(event_data):
        asyncio.run_coroutine_threadsafe(
            websocket.send(json.dumps(event_data)),
            loop
        )
    
    return controller.start_live_capture(send_to_nodejs)

# ... (El resto de handles: handle_get_users, handle_set_user, etc., se mantienen igual) ...
def handle_get_users(device_id):
    return connected_devices[device_id].get_users() if device_id in connected_devices else {"status": "error"}

def handle_set_user(device_id, data):
    if device_id not in connected_devices: return {"status": "error"}
    return connected_devices[device_id].set_user(uid=data["uid"], name=data["name"], user_id=data["user_id"])

def handle_get_attendance(device_id):
    return connected_devices[device_id].get_attendance_logs() if device_id in connected_devices else {"status": "error"}

def handle_disconnect_device(device_id):
    if device_id in connected_devices:
        controller = connected_devices.pop(device_id)
        return controller.disconnect()
    return {"status": "error"}

# PUNTO DE ENTRADA CORREGIDO PARA WEBSOCKETS MODERNOS
async def main():
    async with websockets.serve(handle_client, "localhost", 8765):
        logging.info("Python Bridge iniciado en ws://localhost:8765")
        await asyncio.Future()  # Mantiene el loop corriendo para siempre

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        logging.info("Servidor detenido manualmente")