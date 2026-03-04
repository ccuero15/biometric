import { Router } from 'express';
import { deviceController } from '../../controller/DeviceManagerController.ts';

const router = Router();

// === GESTIÓN DE DISPOSITIVOS ===

// Conectar un nuevo dispositivo (o reconectar)
router.post('/connect', deviceController.connectDevice);
router.post('/:deviceId/connect', deviceController.connectDevice);

// Desconectar un dispositivo
router.delete('/:deviceId', deviceController.disconnectDevice);

// Listar dispositivos conectados y su estado
router.get('/', deviceController.listDevices);

// Reiniciar dispositivo
router.post('/:deviceId/restart', deviceController.restartDevice);


// === GESTIÓN DE USUARIOS ===

// Obtener usuarios del dispositivo
router.get('/:deviceId/users', deviceController.getUsers);

// Crear usuario en el dispositivo
router.post('/:deviceId/users', deviceController.createUser);

// Eliminar usuario del dispositivo
// Nota: Se espera body con { uid } según la implementación del controlador
router.delete('/:deviceId/users', deviceController.deleteUser);


// === GESTIÓN DE ASISTENCIA ===

// Obtener logs de asistencia (query param ?sync=true para forzar descarga)
router.get('/:deviceId/attendance', deviceController.getAttendance);

// Borrar logs del dispositivo
router.delete('/:deviceId/attendance', deviceController.clearAttendance);

// Iniciar enrolamiento remoto
router.post('/:deviceId/enroll', deviceController.startEnrollment);


// === UTILIDADES ===

// Test de voz
router.post('/:deviceId/voice', deviceController.testVoice);

export const deviceManagerRouter = router;
