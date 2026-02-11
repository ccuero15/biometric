import { Router } from 'express';
import { DeviceController } from '@/controller/device.controller.ts';
import { DeviceService } from '@/services/device.services.ts';
import { validate } from '@/controller/middleware/validation.middleware.ts';
import { CreateDeviceSchema, UpdateDeviceSchema, CreateUserDeviceSchema } from '@/dto/device.dto.ts';

const router = Router();
const service = new DeviceService();
const controller = new DeviceController(service);

router.post('/seed', controller.seed);
router.post('/create', validate(CreateDeviceSchema), controller.create);
router.get('/', controller.getAll);
router.get('/users', controller.listUsers);
router.get('/:id', controller.getOne);
router.put('/:id', validate(UpdateDeviceSchema), controller.update);
router.delete('/:id', controller.delete);

router.post('/:id/sync-users', controller.syncUsers);
router.post('/:id/sync-attendance', controller.getTodayLogs);
router.post('/:id/sync-templates', controller.syncTemplates);
router.post('/:id/reboot', controller.reboot);
router.post('/:id/enroll', controller.enrollUser);

router.post('/users-device', controller.getAllUsers);
router.post('/create-user', validate(CreateUserDeviceSchema), controller.createUser);

export default router;