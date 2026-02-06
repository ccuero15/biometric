import { BiometricSDKService } from '@/services/biometric-sdk.services.ts';
import { DeviceService } from '@/services/device.services.ts';
import { Request, Response } from 'express';

export class DeviceController {
  constructor(private sdkService: BiometricSDKService, private deviceService: DeviceService) { }


  register = async (req: Request, res: Response) => {
    try {
      const device = await this.deviceService.createDevice(req.body);
      res.status(201).json({ success: true, data: device });
    } catch (error) {
      res.status(400).json({ success: false, message: (error as Error).message });
    }
  }

  sync = async (req: Request, res: Response) => {
    try {
      const { ip } = req.body;
      if (!ip) return res.status(400).json({ error: "IP requerida" });
      console.log("Sincronizando usuarios desde:", ip);
      const users = await this.sdkService.syncDeviceUsers(ip);
      //const logs = await this.sdkService.startRealTimeMonitoring(ip);
      res.status(200).json({ success: true, count: users.length, data: users });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  };

  startMonitoring = async (req: Request, res: Response) => {
    try {
      const { ip } = req.body;
      await this.sdkService.startRealTimeMonitoring(ip);
      res.status(200).json({ message: `Monitoreo iniciado en ${ip}` });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };

  // Añade este método a tu clase DeviceController
  getTodayLogs = async (req: Request, res: Response) => {
    try {
      const { ip, deviceId } = req.body;
      const records = await this.sdkService.syncDailyAttendance(ip, deviceId);

      res.status(200).json({
        success: true,
        msg: `Sincronizados ${records.length} marcajes de hoy`,
        data: records
      });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  listAllDevices = async (req: Request, res: Response) => {
    try {
      const devices = await this.deviceService.getAllDevices();
      res.status(200).json({ success: true, data: devices });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }
}