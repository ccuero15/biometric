import { DeviceController } from '@/controller/device.controller.ts';
import { BiometricSDKService } from '@/services/biometric-sdk.services.ts';
import { DeviceService } from '@/services/device.services.ts';
import { Router } from 'express';


const router = Router();

// 1. Instanciamos las dependencias
const sdkService = new BiometricSDKService();
const deviceService = new DeviceService();
const deviceController = new DeviceController(sdkService, deviceService);

// 2. Definimos las rutas
// POST http://localhost:3000/api/devices/sync
router.post('/sync', deviceController.sync);

// POST http://localhost:3000/api/devices/monitor
router.post('/monitor', deviceController.startMonitoring);

// POST http://localhost:3000/api/devices/sync-attendance
router.post('/sync-attendance', deviceController.getTodayLogs);

// POST http://localhost:3000/api/devices/register
router.post('/register', deviceController.register);

// GET http://localhost:3000/api/devices/get-all
router.get('/get-all', deviceController.listAllDevices);

export default router;