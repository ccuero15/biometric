import sys
import logging
import time
from device_manager import ZKDeviceController

# Configuración de logs premium
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("ManualTester")

def run_test(ip, uid, user_id, name):
    logger.info(f"--- INICIANDO FLUJO DE PRUEBA DIOS DE PYTHON ---")
    logger.info(f"Objetivo: Conectar a {ip} y enrolar usuario {name} (UID:{uid})")
    
    # El device_id puede ser cualquier cosa para esta prueba manual
    controller = ZKDeviceController(device_id="TEST-01", ip=ip)
    
    # 1. Conexión
    logger.info("Paso 1: Intentando conexión...")
    res = controller.connect()
    if res["status"] != "connected":
        logger.error(f"Fallo en conexión: {res.get('error')}")
        return
    
    logger.info(f"Conectado exitosamente. Info: {res['info']}")
    
    try:
        # 2. Crear usuario base (opcional pero recomendado antes de enrolar huella)
        logger.info(f"Paso 2: Sincronizando datos básicos del usuario {user_id}...")
        res_user = controller.set_user(uid=uid, name=name, user_id=user_id)
        if res_user["status"] == "error":
            logger.warning(f"Error al crear usuario base (puede que ya exista): {res_user.get('error')}")
        else:
            logger.info("Usuario base creado/actualizado correctamente.")
            
        # 3. Enrolamiento de huella
        logger.info(f"Paso 3: ACTIVANDO MODO ENROLAMIENTO EN DISPOSITIVO...")
        logger.info(">>> Por favor, coloque el dedo en el lector biométrico cuando el equipo lo indique <<<")
        
        # Le damos un pequeño delay para que el usuario esté listo
        time.sleep(2)
        
        res_enroll = controller.enroll_user(uid=uid)
        if res_enroll["status"] == "success":
            logger.info("✅ Modo enrolamiento activado con éxito.")
            logger.info("El dispositivo debería estar solicitando la huella ahora.")
        else:
            logger.error(f"❌ No se pudo activar el modo enrolamiento: {res_enroll.get('error')}")
            
    except Exception as e:
        logger.error(f"Ocurrió un error inesperado durante el flujo: {str(e)}")
    finally:
        # Mantener conexión abierta un momento para ver si hay logs
        logger.info("Esperando 10 segundos antes de desconectar...")
        time.sleep(10)
        controller.disconnect()
        logger.info("Prueba finalizada.")

if __name__ == "__main__":
    # Uso: python test_device_flow.py <IP> <UID> <USER_ID> <NAME>
    if len(sys.argv) < 2:
        print("Uso: .\venv\Scripts\python.exe test_device_flow.py <IP> [UID] [USER_ID] [NAME]")
        print("Ejemplo: .\venv\Scripts\python.exe test_device_flow.py 192.168.16.161 999 999 'Test User'")
        sys.exit(1)
        
    target_ip = sys.argv[1]
    target_uid = int(sys.argv[2]) if len(sys.argv) > 2 else 1
    target_user_id = sys.argv[3] if len(sys.argv) > 3 else "1"
    target_name = sys.argv[4] if len(sys.argv) > 4 else "Dios Python"
    
    run_test(target_ip, target_uid, target_user_id, target_name)
