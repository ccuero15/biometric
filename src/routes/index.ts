import { Router } from 'express';
import deviceRoutes from './device.route.ts';
// import userRoutes from './user.routes.js'; // Futuro

const router = Router();

// Agrupamos las rutas bajo el prefijo /devices
router.use('/devices', deviceRoutes);

export default router;