import WebSocket from 'ws';
import { v4 as uuidv4 } from 'uuid';
import { EventEmitter } from 'events';
import {
  BridgeRequest,
  BridgeResponse,
  BridgeAction,
  BridgeEvent,
  AttendanceEvent,
  DeviceErrorEvent,
  EnrollStatusEvent,
  DeviceStatus
} from '../interfaces/biometric.interface.ts';

interface PendingRequest {
  resolve: (value: BridgeResponse) => void;
  reject: (reason: Error) => void;
  timeout: NodeJS.Timeout;
}

export class ZKPythonBridge extends EventEmitter {
  private ws: WebSocket | null = null;
  private isConnected: boolean = false;
  private pendingRequests: Map<string, PendingRequest> = new Map();
  private reconnectTimer: NodeJS.Timeout | null = null;
  private readonly reconnectInterval: number = 5000;
  private readonly requestTimeout: number = 30000; // 30s para operaciones de dispositivo
  private readonly url: string;

  // Registro de dispositivos gestionados
  private deviceRegistry: Map<string, DeviceStatus> = new Map();

  constructor(url: string = process.env.PYTHON_BRIDGE_URL || 'ws://127.0.0.1:8765') {
    super();
    this.url = url;
  }

  /**
   * Inicia conexión con el Python Bridge
   */
  async connect(): Promise<void> {
    if (this.ws?.readyState === WebSocket.OPEN) {
      console.log('[ZK Bridge] Ya conectado');
      return;
    }

    return new Promise((resolve, reject) => {
      console.log(`[ZK Bridge] Conectando a ${this.url}...`);

      try {
        this.ws = new WebSocket(this.url);

        this.ws.on('open', () => {
          console.log('[ZK Bridge] Conexión establecida');
          this.isConnected = true;
          this.emit('connected');
          resolve();
        });

        this.ws.on('message', (data: WebSocket.Data) => {
          this.handleMessage(data.toString());
        });

        this.ws.on('error', (err: Error) => {
          console.error('[ZK Bridge] Error:', err.message);
          if (!this.isConnected) {
            reject(err);
          }
        });

        this.ws.on('close', (code: number, reason: string) => {
          console.log(`[ZK Bridge] Cerrado (${code}): ${reason}`);
          this.handleDisconnection();
        });

      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Desconexión limpia
   */
  disconnect(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    // Rechazar todas las peticiones pendientes
    this.pendingRequests.forEach((req) => {
      clearTimeout(req.timeout);
      req.reject(new Error('Bridge desconectado'));
    });
    this.pendingRequests.clear();

    if (this.ws) {
      this.ws.terminate();
      this.ws = null;
    }

    this.isConnected = false;
    this.emit('disconnected');
  }

  private handleDisconnection(): void {
    this.isConnected = false;
    this.emit('disconnected');

    // Limpiar peticiones pendientes
    this.pendingRequests.forEach((req) => {
      clearTimeout(req.timeout);
      req.reject(new Error('Conexión perdida con Python Bridge'));
    });
    this.pendingRequests.clear();

    // Auto-reconexión
    console.log(`[ZK Bridge] Reconectando en ${this.reconnectInterval}ms...`);
    this.reconnectTimer = setTimeout(() => {
      this.connect().catch(() => {
        // Error ya logueado en connect()
      });
    }, this.reconnectInterval);
  }

  private handleMessage(data: string): void {
    try {
      const message: BridgeResponse | BridgeEvent = JSON.parse(data);

      // Si es evento en tiempo real (no tiene requestId)
      if (this.isBridgeEvent(message)) {
        this.handleEvent(message);
        return;
      }

      // Es respuesta a una solicitud
      if (message.requestId && this.pendingRequests.has(message.requestId)) {
        const pending = this.pendingRequests.get(message.requestId)!;
        clearTimeout(pending.timeout);
        this.pendingRequests.delete(message.requestId);

        if (message.status === 'error') {
          pending.reject(new Error(message.error || message.message || 'Error desconocido'));
        } else {
          pending.resolve(message);
        }
      }

    } catch (err) {
      console.error('[ZK Bridge] Error parseando mensaje:', err);
    }
  }

  private isBridgeEvent(message: any): message is BridgeEvent {
    return message && typeof message.event === 'string';
  }

  private handleEvent(event: BridgeEvent): void {
    switch (event.event) {
      case 'attendance':
        this.emit('attendance', event as AttendanceEvent);
        break;
      case 'error':
        this.emit('deviceError', event as DeviceErrorEvent);
        // Actualizar registro de dispositivo
        if (event.deviceId) {
          this.deviceRegistry.set(event.deviceId, DeviceStatus.ERROR);
        }
        break;
      case 'enroll_status':
        this.emit('enrollStatus', event as EnrollStatusEvent);
        break;
    }
  }

  /**
   * Envío genérico de comandos al Bridge
   */
  private async sendCommand<T = any>(
    action: BridgeAction,
    payload: Record<string, unknown> = {}
  ): Promise<T> {
    if (!this.isConnected || !this.ws) {
      throw new Error('Python Bridge no conectado');
    }

    const requestId = uuidv4();
    const request: BridgeRequest = {
      requestId,
      action,
      ...payload
    };

    return new Promise((resolve, reject) => {
      // Timeout de seguridad
      const timeout = setTimeout(() => {
        this.pendingRequests.delete(requestId);
        reject(new Error(`Timeout esperando respuesta para acción: ${action}`));
      }, this.requestTimeout);

      this.pendingRequests.set(requestId, { resolve: resolve as any, reject, timeout });

      this.ws!.send(JSON.stringify(request), (err) => {
        if (err) {
          clearTimeout(timeout);
          this.pendingRequests.delete(requestId);
          reject(err);
        }
      });
    });
  }

  // ==================== API PÚBLICA PARA DISPOSITIVOS ====================

  async connectDevice(
    deviceId: string,
    ip: string,
    port: number = 4370,
    timeout: number = 10
  ): Promise<BridgeResponse> {
    const result = await this.sendCommand<BridgeResponse>('connect_device', {
      device_id: deviceId,
      ip,
      port,
      timeout
    });

    if (result.status === 'connected') {
      this.deviceRegistry.set(deviceId, DeviceStatus.CONNECTED);
    }

    return result;
  }

  async disconnectDevice(deviceId: string): Promise<BridgeResponse> {
    const result = await this.sendCommand<BridgeResponse>('disconnect_device', {
      device_id: deviceId
    });

    this.deviceRegistry.delete(deviceId);
    return result;
  }

  async startLiveCapture(deviceId: string): Promise<BridgeResponse> {
    return this.sendCommand('start_live_capture', { device_id: deviceId });
  }

  async stopLiveCapture(deviceId: string): Promise<BridgeResponse> {
    return this.sendCommand('stop_live_capture', { device_id: deviceId });
  }

  async getUsers(deviceId: string): Promise<{ users: any[] }> {
    const result = await this.sendCommand<{ users: any[] }>('get_users', {
      device_id: deviceId
    });
    return result;
  }

  async createUser(
    deviceId: string,
    userData: {
      uid: number;
      name: string;
      userId: string;
      privilege?: number;
      password?: string;
      groupId?: string;
      card?: number;
    }
  ): Promise<BridgeResponse> {
    return this.sendCommand('set_user', {
      device_id: deviceId,
      ...userData
    });
  }

  async deleteUser(deviceId: string, uid: number): Promise<BridgeResponse> {
    return this.sendCommand('delete_user', {
      device_id: deviceId,
      uid
    });
  }

  async enrollUser(deviceId: string, uid: number): Promise<BridgeResponse> {
    const result = await this.sendCommand<BridgeResponse>('START_ENROLL', {
      device_id: deviceId,
      uid
    });
    return result;
  }

  async getAttendanceLogs(deviceId: string): Promise<{ logs: any[]; count: number }> {
    return this.sendCommand<{ logs: any[]; count: number }>('get_attendance', {
      device_id: deviceId
    });
  }

  async clearAttendanceLogs(deviceId: string): Promise<BridgeResponse> {
    return this.sendCommand('clear_attendance', { device_id: deviceId });
  }

  async getDeviceInfo(deviceId: string): Promise<BridgeResponse> {
    return this.sendCommand('get_device_info', { device_id: deviceId });
  }

  async testVoice(deviceId: string, index: number): Promise<BridgeResponse> {
    return this.sendCommand('test_voice', {
      device_id: deviceId,
      index
    });
  }

  async restartDevice(deviceId: string): Promise<BridgeResponse> {
    return this.sendCommand('restart_device', { device_id: deviceId });
  }

  // ==================== UTILIDADES ====================

  getDeviceStatus(deviceId: string): DeviceStatus {
    return this.deviceRegistry.get(deviceId) || DeviceStatus.DISCONNECTED;
  }

  getConnectedDevices(): string[] {
    return Array.from(this.deviceRegistry.entries())
      .filter(([_, status]) => status === DeviceStatus.CONNECTED)
      .map(([id]) => id);
  }

  isBridgeConnected(): boolean {
    return this.isConnected;
  }
}

// Singleton para toda la aplicación
export const zkBridge = new ZKPythonBridge();