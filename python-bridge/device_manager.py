import threading
import logging
import time
from zk import ZK, const
from datetime import datetime

# Configuración de nivel de log
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class ZKDeviceController:
    """
    Controller thread-safe para un dispositivo ZKTeco.
    Gestiona la conexión y las operaciones atómicas usando un Lock.
    """
    # Valores estáticos por defecto para agilizar conexiones
    DEFAULT_PORT = 4370
    DEFAULT_TIMEOUT = 10

    def __init__(self, device_id, ip, port=None, password=0, timeout=None):
        self.device_id = str(device_id)
        self.ip = ip
        self.port = port or self.DEFAULT_PORT
        self.password = password
        self.timeout = timeout or self.DEFAULT_TIMEOUT
        self.zk = None
        self.conn = None
        self.is_connected = False
        self.live_capture_thread = None
        self.callback_attendance = None
        self._lock = threading.Lock()
        self._stop_live = threading.Event()

    def connect(self):
        """Establece conexión TCP con el dispositivo de forma segura"""
        with self._lock:
            if self.is_connected and self.conn:
                return {"status": "already_connected", "device_id": self.device_id}
            
            try:
                logging.info(f"[Device {self.device_id}] Conectando a {self.ip}:{self.port}...")
                self.zk = ZK(
                    self.ip, 
                    port=self.port, 
                    timeout=max(self.timeout, 10), # Aseguramos al menos 10s para conexión
                    password=self.password,
                    force_udp=False # Volvemos a TCP
                )
                self.conn = self.zk.connect()
                self.is_connected = True
                
                # Deshabilitar dispositivo durante la obtención de info para evitar interferencias
                self.conn.disable_device()
                
                device_info = {
                    "firmware": self.conn.get_firmware_version(),
                    "serial": self.conn.get_serialnumber(),
                    "platform": self.conn.get_platform(),
                    "device_name": self.conn.get_device_name(),
                    "users_count": self.conn.users,
                    "records_count": self.conn.records
                }
                
                self.conn.enable_device()
                logging.info(f"[Device {self.device_id}] Conexión exitosa. SN: {device_info['serial']}")
                
                return {
                    "status": "connected",
                    "device_id": self.device_id,
                    "info": device_info
                }
                
            except Exception as e:
                # Si es un error de conexión forzada (10054), intentamos UN reintento tras breve delay
                if "10054" in str(e) or "reset" in str(e).lower() or "timeout" in str(e).lower():
                    logging.warning(f"[Device {self.device_id}] Error detectado ({str(e)}). Limpiando y reintentando en 3s...")
                    
                    try:
                        if self.zk: self.zk.disconnect()
                    except: pass
                    
                    time.sleep(3)
                    try:
                        # Recreamos la instancia de ZK para asegurar un socket limpio
                        self.zk = ZK(self.ip, port=self.port, timeout=15, password=self.password, force_udp=False)
                        self.conn = self.zk.connect()
                        self.is_connected = True
                        
                        self.conn.disable_device()
                        info = {
                            "firmware": self.conn.get_firmware_version(),
                            "serial": self.conn.get_serialnumber(),
                            "platform": self.conn.get_platform(),
                            "device_name": self.conn.get_device_name(),
                            "users_count": self.conn.users,
                            "records_count": self.conn.records
                        }
                        self.conn.enable_device()
                        
                        logging.info(f"[Device {self.device_id}] Conexión exitosa tras reintento. SN: {info['serial']}")
                        return {"status": "connected", "device_id": self.device_id, "info": info}
                    except Exception as re_e:
                        logging.error(f"[Device {self.device_id}] Reintento fallido: {str(re_e)}")
                        e = re_e

                logging.error(f"[Device {self.device_id}] Error de conexión: {str(e)}")
                self.is_connected = False
                self.conn = None
                return {
                    "status": "error",
                    "device_id": self.device_id,
                    "error": str(e)
                }

    def start_live_capture(self, callback):
        """Inicia un hilo para capturar eventos en tiempo real"""
        if not self.is_connected or not self.conn:
            return {"status": "error", "error": "Device not connected"}
        
        self.callback_attendance = callback
        self._stop_live.clear()
        
        def capture_loop():
            logging.info(f"[Device {self.device_id}] Live capture iniciado")
            try:
                # live_capture bloquea el socket para lectura de eventos
                # Usamos un generador controlado para poder verificar el stop_live
                capture_gen = self.conn.live_capture()
                while not self._stop_live.is_set():
                    try:
                        # Intentamos obtener el siguiente evento con un pequeño bloqueo controlado
                        # pyzk live_capture es un generador infinito que bloquea
                        attendance = next(capture_gen)
                        
                        if attendance:
                            event_data = {
                                "event": "attendance",
                                "device_id": self.device_id,
                                "user_id": str(attendance.user_id),
                                "timestamp": attendance.timestamp.isoformat(),
                                "status": attendance.status,
                                "punch": attendance.punch
                            }
                            
                            if self.callback_attendance:
                                self.callback_attendance(event_data)
                    except StopIteration:
                        break
                    except Exception as loop_e:
                        logging.warning(f"[Device {self.device_id}] Reintentando lectura en loop: {str(loop_e)}")
                        # Si hay un error de paquete, dormimos un poco y reintentamos si no se ha parado
                        if "invalid" in str(loop_e).lower() or "timeout" in str(loop_e).lower():
                            time.sleep(1)
                            continue
                        else:
                            raise loop_e
                        
            except Exception as e:
                logging.error(f"[Device {self.device_id}] Error en live capture: {str(e)}")
                if self.callback_attendance:
                    self.callback_attendance({
                        "event": "error",
                        "device_id": self.device_id,
                        "error": f"Live capture error: {str(e)}"
                    })
                self.is_connected = False
        
        self.live_capture_thread = threading.Thread(target=capture_loop, daemon=True)
        self.live_capture_thread.start()
        
        return {"status": "live_capture_started", "device_id": self.device_id}

    def stop_live_capture(self):
        self._stop_live.set()
        return {"status": "success", "message": "Live capture stop requested"}

    def get_users(self):
        with self._lock:
            if not self.is_connected or not self.conn:
                return {"status": "error", "error": "Not connected"}
            try:
                users = self.conn.get_users()
                return {
                    "status": "success", 
                    "users": [{
                        "uid": u.uid,
                        "name": u.name,
                        "privilege": u.privilege,
                        "user_id": u.user_id,
                        "group_id": u.group_id,
                        "card": u.card
                    } for u in users]
                }
            except Exception as e:
                return {"status": "error", "error": str(e)}

    def set_user(self, uid, name, user_id, privilege=0, password="", group_id="", card=0):
        with self._lock:
            if not self.is_connected or not self.conn:
                return {"status": "error", "error": "Not connected"}
            try:
                self.conn.disable_device()
                self.conn.set_user(uid=uid, name=name, privilege=privilege, password=password, 
                                 group_id=group_id, user_id=str(user_id), card=card)
                self.conn.enable_device()
                return {"status": "success", "message": f"User {user_id} synchronized"}
            except Exception as e:
                self.conn.enable_device()
                return {"status": "error", "error": str(e)}

    def delete_user(self, uid):
        with self._lock:
            if not self.is_connected or not self.conn:
                return {"status": "error", "error": "Not connected"}
            try:
                self.conn.delete_user(uid=uid)
                return {"status": "success", "message": f"User UID {uid} deleted"}
            except Exception as e:
                return {"status": "error", "error": str(e)}

    def get_attendance_logs(self):
        with self._lock:
            if not self.is_connected or not self.conn:
                return {"status": "error", "error": "Not connected"}
            try:
                attendances = self.conn.get_attendance()
                return {
                    "status": "success", 
                    "logs": [{
                        "user_id": a.user_id,
                        "timestamp": a.timestamp.isoformat(),
                        "status": a.status,
                        "punch": a.punch
                    } for a in attendances],
                    "count": len(attendances)
                }
            except Exception as e:
                return {"status": "error", "error": str(e)}

    def start_enrollment_process(self, uid, callback_status):
        """
        Inicia un proceso persistente de enrolamiento.
        callback_status: función para enviar actualizaciones de estado al WebSocket.
        """
        # Ejecutar en hilo separado para no bloquear el WebSocket principal
        threading.Thread(
            target=self._enrollment_worker_task, 
            args=(uid, callback_status), 
            daemon=True
        ).start()
        return {"status": "process_started", "message": "Worker de enrolamiento activado"}

    def _enrollment_worker_task(self, uid, callback_status):
        """Método interno que ejecuta la lógica de enrolamiento en un hilo"""
        try:
            # 1. Asegurar exclusividad del socket
            with self._lock:
                conn = self.conn
                if not self.is_connected or not conn:
                    callback_status({"status": "error", "message": "Dispositivo no conectado"})
                    return

                # Detener live capture temporalmente para evitar colisiones en el socket
                was_live = False
                if self.live_capture_thread and self.live_capture_thread.is_alive():
                    was_live = True
                    self._stop_live.set()
                    time.sleep(1)

                try:
                    callback_status({"status": "starting_enrollment", "uid": uid})
                    
                    logging.info(f"[Device {self.device_id}] Solicitando enrolamiento para UID {uid}")
                    conn.enroll_user(uid, temp_id=0)
                    
                    callback_status({
                        "status": "waiting_finger", 
                        "message": "Por favor, coloque su huella 3 veces en el lector",
                        "uid": uid
                    })

                    found_template = None
                    retry_count = 0
                    max_retries = 30
                    
                    while not found_template and retry_count < max_retries:
                        time.sleep(1)
                        # Re-obtener conn para asegurar que sigue vivo
                        current_conn = self.conn
                        if current_conn:
                            templates = current_conn.get_templates()
                            for t in templates:
                                if t.uid == uid:
                                    found_template = t
                                    break
                        retry_count = retry_count + 1
                    
                    if found_template:
                        # 3. Extracción de Hash/Template
                        template_hex = found_template.template.hex()
                        
                        logging.info(f"[Device {self.device_id}] Enrolamiento exitoso para UID {uid}")
                        callback_status({
                            "status": "enrollment_success",
                            "uid": uid,
                            "template": template_hex,
                            "message": "Huella capturada y sincronizada correctamente"
                        })
                    else:
                        callback_status({
                            "status": "error",
                            "message": "Timeout o cancelación: No se detectó nueva huella en el tiempo esperado",
                            "code": "ENROLL_TIMEOUT"
                        })

                except Exception as e:
                    error_msg = str(e)
                    code = "ENROLL_ERROR"
                    if "duplicate" in error_msg.lower(): code = "DUPLICATE_FINGER"
                    
                    callback_status({
                            "status": "error",
                            "message": f"Error hardware: {error_msg}",
                            "code": code
                    })
                finally:
                    if was_live:
                        self._stop_live.clear()
        except Exception as ge:
            logging.error(f"Error crítico en worker de enrolamiento: {str(ge)}")

    def get_template(self, uid, temp_id=0):
        """Recupera un template específico"""
        with self._lock:
            if not self.is_connected or not self.conn:
                return None
            templates = self.conn.get_templates()
            for t in templates:
                if t.uid == uid and t.temp_id == temp_id:
                    return t.template.hex()
            return None

    def clear_attendance(self):
        with self._lock:
            if not self.is_connected or not self.conn:
                return {"status": "error", "error": "Not connected"}
            try:
                self.conn.clear_attendance()
                return {"status": "success", "message": "Attendance logs cleared"}
            except Exception as e:
                return {"status": "error", "error": str(e)}

    def restart(self):
        with self._lock:
            if not self.is_connected or not self.conn:
                return {"status": "error", "error": "Not connected"}
            try:
                self.conn.restart()
                self.is_connected = False
                return {"status": "success", "message": "Device restarting"}
            except Exception as e:
                return {"status": "error", "error": str(e)}

    def disconnect(self):
        with self._lock:
            self._stop_live.set()
            try:
                if self.conn:
                    self.conn.enable_device()
                    self.conn.disconnect()
                self.is_connected = False
                logging.info(f"[Device {self.device_id}] Desconectado")
                return {"status": "disconnected", "device_id": self.device_id}
            except Exception as e:
                self.is_connected = False
                return {"status": "error", "error": str(e)}
