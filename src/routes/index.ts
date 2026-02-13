import { Router } from 'express';
import deviceRoutes from './device.route.ts';
import { deviceManagerRouter } from './v1/device-manager.routes.ts';

const router = Router();

// Rutas Legacy (V0)
router.use('/devices', deviceRoutes);

// Rutas V1 (Device Manager)
router.use('/v1/devices', deviceManagerRouter);

export default router;