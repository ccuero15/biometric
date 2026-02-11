import { DeviceService } from '@/services/device.services.ts';
import { Request, Response } from 'express';
import { asyncHandler } from '@/lib/async-handler.ts';

export class DeviceController {
  constructor(private service: DeviceService) { }

  createUser = asyncHandler(async (req: Request, res: Response) => {
    const { ip, user } = req.body;
    await this.service.createUser(ip, user);
    res.json({ success: true, message: "Usuario creado exitosamente" });
  });

  create = asyncHandler(async (req: Request, res: Response) => {
    const device = await this.service.createDevice(req.body);
    res.status(201).json({
      success: true,
      message: "Dispositivo vinculado exitosamente",
      data: device
    });
  });

  getAllUsers = asyncHandler(async (req: Request, res: Response) => {
    const { ip } = req.body;
    const result = await this.service.getAllUsers(ip);
    res.json({ success: true, data: result });
  });

  getAll = asyncHandler(async (_req: Request, res: Response) => {
    const data = await this.service.getAllDevices();
    res.json({ success: true, data });
  });

  getOne = asyncHandler(async (req: Request, res: Response) => {
    const data = await this.service.getDeviceById(Number(req.params.id));
    res.json({ success: true, data });
  });

  update = asyncHandler(async (req: Request, res: Response) => {
    const data = await this.service.updateDevice(Number(req.params.id), req.body);
    res.json({ success: true, data });
  });

  delete = asyncHandler(async (req: Request, res: Response) => {
    await this.service.deleteDevice(Number(req.params.id));
    res.json({ success: true, message: "Dispositivo eliminado correctamente" });
  });

  syncUsers = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.syncUsers(Number(id));
    res.json({ success: true, data: result });
  });

  getTodayLogs = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.syncTodayLogs(Number(id));
    res.json({ success: true, data: result });
  });

  reboot = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.reboot(Number(id));
    res.json({ success: true, message: "Reinicio enviado" });
  });

  enrollUser = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { userId } = req.body;
    await this.service.startEnrollment(Number(id), Number(userId));
    res.json({ success: true, message: "Modo enrolamiento activado en el dispositivo" });
  });

  syncTemplates = asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.syncTemplates(Number(id));
    res.json({ success: true, message: "Sincronización de huellas completada", data: result });
  });

  listUsers = asyncHandler(async (_req: Request, res: Response) => {
    const data = await this.service.listDbUsers();
    res.json({ success: true, data });
  });

  seed = asyncHandler(async (_req: Request, res: Response) => {
    const result = await this.service.seedDatabase();
    res.json({ success: true, message: "Base de datos inicializada", data: result });
  });
}