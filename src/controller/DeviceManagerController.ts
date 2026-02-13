import { Request, Response } from 'express';
import { deviceManager } from '../services/DeviceManagerService.js';


import {
  ConnectDeviceSchema,
  CreateUserSchema,
  DeleteUserSchema,
  VoiceTestSchema,
  DeviceCommandSchema,
  validateDto,
  parseDto,
  formatZodErrors
} from '../dto/device.dto.ts';
import { z } from 'zod';

export class DeviceController {

  /**
   * POST /api/devices/connect
   */
  async connectDevice(req: Request, res: Response): Promise<void> {
    try {
      // Validación con Zod
      const validation = validateDto(ConnectDeviceSchema, req.body);

      if (!validation.success) {
        res.status(400).json({
          success: false,
          error: 'Validación fallida',
          details: formatZodErrors(validation.errors)
        });
        return;
      }

      const dto = validation.data;

      const deviceInfo = await deviceManager.registerDevice({
        deviceId: dto.deviceId,
        ip: dto.ip,
        port: dto.port,
        location: dto.location,
        description: dto.description
      });

      res.json({
        success: true,
        message: `Dispositivo ${dto.deviceId} conectado`,
        data: deviceInfo
      });

    } catch (error: any) {
      console.error('[DeviceController] Error en connect:', error);
      res.status(500).json({
        success: false,
        error: error.message || 'Error interno del servidor'
      });
    }
  }

  /**
   * DELETE /api/devices/:deviceId
   */
  async disconnectDevice(req: Request, res: Response): Promise<void> {
    try {
      // Validar params con Zod
      const dto = parseDto(DeviceCommandSchema, { deviceId: req.params.deviceId });

      await deviceManager.unregisterDevice(dto.deviceId);

      res.json({
        success: true,
        message: `Dispositivo ${dto.deviceId} desconectado`
      });

    } catch (error: any) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: 'ID de dispositivo inválido',
          details: formatZodErrors(error.issues)
        });
        return;
      }

      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * GET /api/devices/:deviceId/users
   */
  async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const dto = parseDto(DeviceCommandSchema, { deviceId: req.params.deviceId });
      const users = await deviceManager.syncUsersFromDevice(dto.deviceId);

      res.json({
        success: true,
        count: users.length,
        data: users
      });

    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * POST /api/devices/:deviceId/users
   */
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const validation = validateDto(CreateUserSchema, req.body);

      if (!validation.success) {
        res.status(400).json({
          success: false,
          error: 'Datos de usuario inválidos',
          details: formatZodErrors(validation.errors)
        });
        return;
      }

      const dto = validation.data;
      const deviceId = req.params.deviceId;

      // Validar que deviceId existe
      parseDto(DeviceCommandSchema, { deviceId });


      await deviceManager.enrollUser(deviceId, {
        uid: dto.uid,
        name: dto.name as string,
        userId: dto.userId,
        privilege: dto.privilege,
        password: dto.password,
        groupId: dto.groupId
      });

      res.status(201).json({
        success: true,
        message: `Usuario ${dto.userId} creado exitosamente`,
        data: {
          uid: dto.uid,
          userId: dto.userId,
          name: dto.name,
          deviceId
        }
      });

    } catch (error: any) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: 'Error de validación',
          details: formatZodErrors(error.issues)
        });
        return;
      }

      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * DELETE /api/devices/:deviceId/users/:uid
   */
  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const validation = validateDto(DeleteUserSchema, req.body);

      if (!validation.success) {
        res.status(400).json({
          success: false,
          error: 'Datos de usuario inválidos',
          details: formatZodErrors(validation.errors)
        });
        return;
      }
      const dto = validation.data;

      await deviceManager.deleteUser(dto.deviceId as string, dto.uid);

      res.json({
        success: true,
        message: `Usuario UID ${dto.uid} eliminado del dispositivo ${dto.deviceId}`
      });

    } catch (error: any) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: 'Parámetros inválidos',
          details: formatZodErrors(error.issues)
        });
        return;
      }

      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * GET /api/devices/:deviceId/attendance
   */
  async getAttendance(req: Request, res: Response): Promise<void> {
    try {
      const dto = parseDto(DeviceCommandSchema, { deviceId: req.params.deviceId });
      const { sync } = req.query;

      let logs;
      if (sync === 'true') {
        logs = await deviceManager.syncAttendanceLogs(dto.deviceId);
      } else {
        logs = deviceManager.getBufferedAttendance()
          .filter(log => log.deviceId === dto.deviceId);
      }

      res.json({
        success: true,
        count: logs.length,
        data: logs
      });

    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * DELETE /api/devices/:deviceId/attendance
   */
  async clearAttendance(req: Request, res: Response): Promise<void> {
    try {
      const dto = parseDto(DeviceCommandSchema, { deviceId: req.params.deviceId });
      await deviceManager.clearDeviceLogs(dto.deviceId);

      res.json({
        success: true,
        message: 'Logs de asistencia limpiados'
      });

    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * GET /api/devices
   */
  async listDevices(req: Request, res: Response): Promise<void> {
    try {
      const devices = deviceManager.getRegisteredDevices();
      const devicesWithStatus = devices.map(d => ({
        ...d,
        status: deviceManager.getDeviceStatus(d.deviceId)
      }));

      res.json({
        success: true,
        count: devicesWithStatus.length,
        data: devicesWithStatus
      });

    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * POST /api/devices/:deviceId/voice
   */
  async testVoice(req: Request, res: Response): Promise<void> {
    try {
      const validation = validateDto(VoiceTestSchema, {
        deviceId: req.params.deviceId,
        index: req.body.index
      });

      if (!validation.success) {
        res.status(400).json({
          success: false,
          error: 'Parámetros inválidos',
          details: formatZodErrors(validation.errors)
        });
        return;
      }

      await deviceManager.testDeviceVoice(validation.data.deviceId, validation.data.index);

      res.json({
        success: true,
        message: `Test de voz ${validation.data.index} ejecutado`
      });

    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }

  /**
   * POST /api/devices/:deviceId/restart
   */
  async restartDevice(req: Request, res: Response): Promise<void> {
    try {
      const dto = parseDto(DeviceCommandSchema, { deviceId: req.params.deviceId });
      await deviceManager.restartDevice(dto.deviceId);

      res.json({
        success: true,
        message: 'Dispositivo reiniciándose...'
      });

    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  }
}

// Instanciar controlador
export const deviceController = new DeviceController();