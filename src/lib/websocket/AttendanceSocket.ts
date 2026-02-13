import { Server as SocketIOServer, Socket } from 'socket.io';
import { Server as HttpServer } from 'http';
import { deviceManager } from '../../services/DeviceManagerService.ts';
import { AttendanceEvent } from '../../interfaces/biometric.interface.ts';

export class AttendanceSocketServer {
  private io: SocketIOServer;
  private connectedClients: Map<string, Socket> = new Map();

  constructor(httpServer: HttpServer) {
    this.io = new SocketIOServer(httpServer, {
      cors: {
        origin: process.env.FRONTEND_URL || "*",
        methods: ["GET", "POST"]
      }
    });

    this.setupEventHandlers();
    this.setupDeviceListeners();
  }

  private setupEventHandlers(): void {
    this.io.on('connection', (socket: Socket) => {
      console.log(`[Socket] Cliente conectado: ${socket.id}`);
      this.connectedClients.set(socket.id, socket);

      // Autenticación simple (mejorar con JWT en producción)
      socket.on('authenticate', (token: string) => {
        // Validar token aquí
        socket.join('authenticated');
        socket.emit('ready', { message: 'Conectado al sistema de asistencia' });
      });

      // Solicitar sync manual de un dispositivo
      socket.on('sync_device', async (deviceId: string) => {
        try {
          const logs = await deviceManager.syncAttendanceLogs(deviceId);
          socket.emit('sync_complete', { deviceId, logs });
        } catch (error: any) {
          socket.emit('error', { message: error.message });
        }
      });

      socket.on('disconnect', () => {
        console.log(`[Socket] Cliente desconectado: ${socket.id}`);
        this.connectedClients.delete(socket.id);
      });
    });
  }

  private setupDeviceListeners(): void {
    // Reenviar eventos de asistencia a todos los clientes autenticados
    deviceManager.on('attendance', (event: AttendanceEvent) => {
      this.io.to('authenticated').emit('attendance', {
        deviceId: event.deviceId,
        userId: event.userId,
        timestamp: event.timestamp,
        status: event.status,
        punch: event.punch
      });
    });

    // Notificar errores de dispositivos
    deviceManager.on('deviceError', (event) => {
      this.io.to('authenticated').emit('device_error', {
        deviceId: event.deviceId,
        error: event.error,
        timestamp: event.timestamp
      });
    });

    // Notificar cuando un dispositivo se registra
    deviceManager.on('deviceRegistered', (data) => {
      this.io.to('authenticated').emit('device_connected', data);
    });
  }

  broadcast(event: string, data: any): void {
    this.io.emit(event, data);
  }

  getConnectedClientsCount(): number {
    return this.connectedClients.size;
  }
}