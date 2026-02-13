import threading
import time
from zk import ZK, const
from datetime import datetime
import json

class ZKDeviceController:
    """
    Controller thread-safe para un dispositivo ZKTeco.
    Cada instancia = 1 dispositivo físico.
    """
    def __init__(self, device_id, ip, port=4370, password=0, timeout=5):
        self.device_id = device_id
        self.ip = ip
        self.port = port
        self.password = password
        self.timeout = timeout
        self.zk = None
        self.conn = None
        self.is_connected = False
        self.live_capture_thread = None
        self.callback_attendance = None  # Función callback para eventos
        self._lock = threading.Lock()
        
    def connect(self):
        """Establece conexión TCP con el dispositivo"""
        try:
            with self._lock:
                if self.is_connected:
                    return {"status": "already_connected", "device_id": self.device_id}
                
                self.zk = ZK(
                    self.ip, 
                    port=self.port, 
                    timeout=self.timeout, 
                    password=self.password,
                    force_udp=False,
                    ommit_ping=False
                )
                self.conn = self.zk.connect()
                self.is_connected = True
                
                # Obtener info del dispositivo
                device_info = {
                    "firmware": self.conn.get_firmware_version(),
                    "serial": self.conn.get_serialnumber(),
                    "platform": self.conn.get_platform(),
                    "device_name": self.conn.get_device_name(),
                    "users_count": self.conn.users,
                    "records_count": self.conn.records
                }
                
                return {
                    "status": "connected",
                    "device_id": self.device_id,
                    "info": device_info
                }
                
        except Exception as e:
            self.is_connected = False
            return {
                "status": "error",
                "device_id": self.device_id,
                "error": str(e)
            }
    
    def start_live_capture(self, callback):
        """
        INICIA CAPTURA EN TIEMPO REAL (bloqueante, va en thread separado)
        callback: función que recibe dict con attendance data
        """
        if not self.is_connected:
            return {"status": "error", "error": "Device not connected"}
        
        self.callback_attendance = callback
        
        def capture_loop():
            try:
                # live_capture() es un generator bloqueante
                for attendance in self.conn.live_capture():
                    if attendance is None:
                        continue
                    
                    event_data = {
                        "event": "attendance",
                        "device_id": self.device_id,
                        "user_id": attendance.user_id,
                        "timestamp": attendance.timestamp.isoformat(),
                        "status": attendance.status,
                        "punch": attendance.punch
                    }
                    
                    # Enviar a NodeJS vía callback
                    if self.callback_attendance:
                        self.callback_attendance(event_data)
                        
            except Exception as e:
                if self.callback_attendance:
                    self.callback_attendance({
                        "event": "error",
                        "device_id": self.device_id,
                        "error": str(e)
                    })
                self.is_connected = False
        
        # Ejecutar en thread separado para no bloquear WebSocket
        self.live_capture_thread = threading.Thread(target=capture_loop, daemon=True)
        self.live_capture_thread.start()
        
        return {"status": "live_capture_started", "device_id": self.device_id}
    
    def get_users(self):
        """Obtiene todos los usuarios del dispositivo"""
        if not self.is_connected:
            return {"status": "error", "error": "Not connected"}
        
        try:
            users = self.conn.get_users()
            users_list = []
            for user in users:
                users_list.append({
                    "uid": user.uid,
                    "name": user.name,
                    "privilege": user.privilege,
                    "user_id": user.user_id,
                    "group_id": user.group_id
                })
            return {"status": "success", "users": users_list}
        except Exception as e:
            return {"status": "error", "error": str(e)}
    
    def set_user(self, uid, name, user_id, privilege=0, password="", group_id="", card=0):
        """Crea/actualiza usuario en el dispositivo"""
        if not self.is_connected:
            return {"status": "error", "error": "Not connected"}
        
        try:
            self.conn.disable_device()
            self.conn.set_user(
                uid=uid,
                name=name,
                privilege=privilege,
                password=password,
                group_id=group_id,
                user_id=user_id,
                card=card
            )
            self.conn.enable_device()
            return {"status": "success", "message": f"User {user_id} created"}
        except Exception as e:
            self.conn.enable_device()  # Asegurar re-enable
            return {"status": "error", "error": str(e)}
    
    def get_attendance_logs(self):
        """Obtiene logs de asistencia (históricos)"""
        if not self.is_connected:
            return {"status": "error", "error": "Not connected"}
        
        try:
            attendances = self.conn.get_attendance()
            logs = []
            for att in attendances:
                logs.append({
                    "user_id": att.user_id,
                    "timestamp": att.timestamp.isoformat(),
                    "status": att.status,
                    "punch": att.punch
                })
            return {"status": "success", "logs": logs, "count": len(logs)}
        except Exception as e:
            return {"status": "error", "error": str(e)}
    
    def disconnect(self):
        """Cierra conexión limpiamente"""
        with self._lock:
            try:
                if self.conn:
                    self.conn.enable_device()
                    self.conn.disconnect()
                self.is_connected = False
                return {"status": "disconnected", "device_id": self.device_id}
            except Exception as e:
                return {"status": "error", "error": str(e)}