import { zkBridge, ZKPythonBridge } from '../lib/ZKPythonBridge.ts';
import { AttendanceEvent, DeviceErrorEvent, DeviceInfo, ZKUser, AttendanceLog } from '../interfaces/biometric.interface.ts';
import { EventEmitter } from 'events';

interface DeviceConfig {
  deviceId: string;
  ip: string;
  port: number;
  location?: string;
  description?: string;
}

interface ConnectionPool {
  [deviceId: string]: {
    config: DeviceConfig;
    connectedAt: Date;
    lastActivity: Date;
  };
}

export class DeviceManagerService extends EventEmitter {
  private bridge: ZKPythonBridge;
  private connectionPool: ConnectionPool = {};
  private isInitialized: boolean = false;
  private attendanceBuffer: AttendanceEvent[] = [];
  private readonly bufferMaxSize: number = 1000;

  constructor(bridge: ZKPythonBridge = zkBridge) {
    super();
    this.bridge = bridge;
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Eventos de asistencia en tiempo real
    this.bridge.on('attendance', (event: AttendanceEvent) => {
      this.handleAttendanceEvent(event);
    });

    // Errores de dispositivos
    this.bridge.on('deviceError', (event: DeviceErrorEvent) => {
      console.error(`[DeviceManager] Error en ${event.deviceId}:`, event.error);
      this.emit('deviceError', event);
      
      // Actualizar estado en pool
      if (this.connectionPool[event.deviceId]) {
        this.connectionPool[event.deviceId].lastActivity = new Date();
      }
    });

    // Cambios de conexión del bridge
    this.bridge.on('connected', () => {
      console.log('[DeviceManager] Bridge conectado');
      this.isInitialized = true;
      this.emit('ready');
    });

    this.bridge.on('disconnected', () => {
      console.warn('[DeviceManager] Bridge desconectado');
      this.isInitialized = false;
      this.emit('offline');
    });
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    await this.bridge.connect();
  }

  /**
   * Conecta y registra un nuevo dispositivo biométrico
   */
  async registerDevice(config: DeviceConfig): Promise<DeviceInfo> {
    try {
      console.log(`[DeviceManager] Registrando dispositivo ${config.deviceId} en ${config.ip}`);
      
      const result = await this.bridge.connectDevice(
        config.deviceId,
        config.ip,
        config.port
      );

      if (result.status !== 'connected' || !result.info) {
        throw new Error(`No se pudo conectar: ${result.error || result.message}`);
      }

      // Guardar en pool de conexiones
      this.connectionPool[config.deviceId] = {
        config,
        connectedAt: new Date(),
        lastActivity: new Date()
      };

      // Iniciar captura en tiempo real automáticamente
      await this.bridge.startLiveCapture(config.deviceId);

      console.log(`[DeviceManager] Dispositivo ${config.deviceId} registrado y en modo live capture`);
      
      this.emit('deviceRegistered', {
        deviceId: config.deviceId,
        info: result.info
      });

      return result.info;

    } catch (error) {
      console.error(`[DeviceManager] Error registrando ${config.deviceId}:`, error);
      throw error;
    }
  }

  /**
   * Desconecta y elimina un dispositivo
   */
  async unregisterDevice(deviceId: string): Promise<void> {
    if (!this.connectionPool[deviceId]) {
      throw new Error(`Dispositivo ${deviceId} no está registrado`);
    }

    try {
      await this.bridge.disconnectDevice(deviceId);
      delete this.connectionPool[deviceId];
      this.emit('deviceUnregistered', { deviceId });
    } catch (error) {
      console.error(`[DeviceManager] Error desconectando ${deviceId}:`, error);
      throw error;
    }
  }

  /**
   * Procesa eventos de asistencia
   */
  private handleAttendanceEvent(event: AttendanceEvent): void {
    // Agregar a buffer circular
    this.attendanceBuffer.push(event);
    if (this.attendanceBuffer.length > this.bufferMaxSize) {
      this.attendanceBuffer.shift();
    }

    // Actualizar actividad del dispositivo
    if (this.connectionPool[event.deviceId]) {
      this.connectionPool[event.deviceId].lastActivity = new Date();
    }

    // Emitir a suscriptores (controladores, websockets, etc.)
    this.emit('attendance', event);
  }

  // ==================== OPERACIONES CRUD DE USUARIOS ====================

  async syncUsersFromDevice(deviceId: string): Promise<ZKUser[]> {
    this.checkDeviceRegistered(deviceId);
    const result = await this.bridge.getUsers(deviceId);
    return result.users || [];
  }

  async enrollUser(
    deviceId: string | string[], 
    userData: {
      uid: number;
      name: string;
      userId: string;
      privilege?: number;
      password?: string;
      groupId?: string;
    }
  ): Promise<void> {

    if (Array.isArray(deviceId)) {
      for (const id of deviceId) {
        this.checkDeviceRegistered(id);
      }
    } else {
      this.checkDeviceRegistered(deviceId);
    }
    
    if (Array.isArray(deviceId)) {
      for (const id of deviceId) {
        await this.bridge.createUser(id, {
          ...userData,
          card: 0
        });
      }
    } else {
      await this.bridge.createUser(deviceId, {
        ...userData,
        card: 0
      });
    }

    console.log(`[DeviceManager] Usuario ${userData.userId} enrolado en ${deviceId}`);
  }

  async deleteUser(deviceId: string | string[], uid: number): Promise<void> {
    if (Array.isArray(deviceId)) {
      for (const id of deviceId) {
        this.checkDeviceRegistered(id);
      }
    } else {
      this.checkDeviceRegistered(deviceId);
    }
    
    if (Array.isArray(deviceId)) {
      for (const id of deviceId) {
        await this.bridge.deleteUser(id, uid);
      }
    } else {
      await this.bridge.deleteUser(deviceId, uid);
    }
  }

  // ==================== LOGS DE ASISTENCIA ====================

  async syncAttendanceLogs(deviceId: string): Promise<AttendanceLog[]> {
    this.checkDeviceRegistered(deviceId);
    const result = await this.bridge.getAttendanceLogs(deviceId);
    return result.logs || [];
  }

  async clearDeviceLogs(deviceId: string): Promise<void> {
    this.checkDeviceRegistered(deviceId);
    await this.bridge.clearAttendanceLogs(deviceId);
  }

  getBufferedAttendance(): AttendanceEvent[] {
    return [...this.attendanceBuffer];
  }

  // ==================== ADMINISTRACIÓN ====================

  async restartDevice(deviceId: string): Promise<void> {
    this.checkDeviceRegistered(deviceId);
    await this.bridge.restartDevice(deviceId);
  }

  async testDeviceVoice(deviceId: string, voiceIndex: number = 0): Promise<void> {
    this.checkDeviceRegistered(deviceId);
    await this.bridge.testVoice(deviceId, voiceIndex);
  }

  getRegisteredDevices(): DeviceConfig[] {
    return Object.values(this.connectionPool).map(pool => pool.config);
  }

  getDeviceStatus(deviceId: string) {
    return {
      registered: !!this.connectionPool[deviceId],
      bridgeStatus: this.bridge.getDeviceStatus(deviceId),
      lastActivity: this.connectionPool[deviceId]?.lastActivity || null
    };
  }

  private checkDeviceRegistered(deviceId: string): void {
    if (!this.connectionPool[deviceId]) {
      throw new Error(`Dispositivo ${deviceId} no registrado. Llame a registerDevice primero.`);
    }
  }

  /**
   * Limpieza graceful al cerrar aplicación
   */
  async shutdown(): Promise<void> {
    console.log('[DeviceManager] Cerrando conexiones...');
    
    // Desconectar todos los dispositivos
    const disconnectPromises = Object.keys(this.connectionPool).map(deviceId => 
      this.bridge.disconnectDevice(deviceId).catch(err => 
        console.error(`Error desconectando ${deviceId}:`, err)
      )
    );
    
    await Promise.all(disconnectPromises);
    this.bridge.disconnect();
  }
}

// Singleton
export const deviceManager = new DeviceManagerService();