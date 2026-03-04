import { zkBridge, ZKPythonBridge } from '../lib/ZKPythonBridge.ts';
import { AttendanceEvent, DeviceErrorEvent, DeviceInfo, ZKUser, AttendanceLog } from '../interfaces/biometric.interface.ts';
import { EventEmitter } from 'events';
import { UserRepository } from '../repository/user.repository.ts';
import { BiometricRepository } from '../repository/biometric.repository.ts';
import { encrypt } from '../lib/crypto.ts';

interface DeviceConfig {
  deviceId: string;
  ip: string;
  port?: number;
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
  private userRepo: UserRepository;
  private biometricRepo: BiometricRepository;
  private connectionPool: ConnectionPool = {};
  private isInitialized: boolean = false;
  private attendanceBuffer: AttendanceEvent[] = [];
  private readonly bufferMaxSize: number = 1000;

  constructor(bridge: ZKPythonBridge = zkBridge) {
    super();
    this.bridge = bridge;
    this.userRepo = new UserRepository();
    this.biometricRepo = new BiometricRepository();
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
    await this.checkDeviceRegistered(deviceId);
    const result = await this.bridge.getUsers(deviceId);
    return result.users || [];
  }

  async enrollUser(
    deviceId: string,
    userData: {
      uid?: number;
      name: string;
      userId: string;
      privilege?: number;
      password?: string;
      groupId?: string;
    }
  ): Promise<any> {
    await this.checkDeviceRegistered(deviceId);

    // Si no viene UID, buscamos el siguiente en el dispositivo
    let finalUid = userData.uid;
    if (!finalUid) {
      console.log(`[DeviceManager] Buscando UID disponible en ${deviceId}...`);
      const existingUsers = await this.syncUsersFromDevice(deviceId);
      const maxUid = existingUsers.reduce((max, u) => Math.max(max, u.uid), 0);
      finalUid = maxUid + 1;
      console.log(`[DeviceManager] Asignando UID: ${finalUid}`);
    }

    const payload = {
      ...userData,
      uid: finalUid,
      card: 0
    };

    await this.bridge.createUser(deviceId, payload);
    console.log(`[DeviceManager] Usuario ${userData.userId} (UID: ${finalUid}) enrolado en ${deviceId}`);

    return {
      ...payload,
      deviceId
    };
  }

  async startRemoteEnrollment(deviceId: string, uid: number) {
    await this.checkDeviceRegistered(deviceId);
    console.log(`[DeviceManager] Iniciando enrolamiento remoto para UID ${uid} en ${deviceId}`);
    const result = await this.bridge.enrollUser(deviceId, uid);

    // Si el enrolamiento fue exitoso y tenemos un template, intentamos guardarlo
    if (result.status === 'enrollment_success' && result.template) {
      try {
        // Buscamos al usuario en el dispositivo para obtener su userId (Cédula)
        const users = await this.syncUsersFromDevice(deviceId);
        const deviceUser = users.find(u => u.uid === uid);

        if (deviceUser) {
          const cedula = parseInt(deviceUser.userId);
          const dbUser = await this.userRepo.findByCedula(cedula);

          if (dbUser) {
            // Encriptar template (que viene en HEX)
            const templateBuffer = Buffer.from(result.template, 'hex');
            const { encryptedData, iv } = encrypt(templateBuffer);

            // Guardar en DB (asumimos fingerIndex 0 por defecto para enrolamiento remoto)
            await this.biometricRepo.saveTemplate(dbUser.id, 0, encryptedData, iv);
            console.log(`[DeviceManager] Template para usuario ${cedula} guardado en DB`);
          } else {
            console.warn(`[DeviceManager] No se encontró usuario con cédula ${cedula} en la base de datos para guardar el template`);
          }
        }
      } catch (error) {
        console.error(`[DeviceManager] Error persistiendo template:`, error);
      }
    }

    return result;
  }

  async deleteUser(deviceId: string | string[], uid: number): Promise<void> {
    if (Array.isArray(deviceId)) {
      for (const id of deviceId) {
        await this.checkDeviceRegistered(id);
      }
    } else {
      await this.checkDeviceRegistered(deviceId);
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
    await this.checkDeviceRegistered(deviceId);
    const result = await this.bridge.getAttendanceLogs(deviceId);
    return result.logs || [];
  }

  async clearDeviceLogs(deviceId: string): Promise<void> {
    await this.checkDeviceRegistered(deviceId);
    await this.bridge.clearAttendanceLogs(deviceId);
  }

  getBufferedAttendance(): AttendanceEvent[] {
    return [...this.attendanceBuffer];
  }

  // ==================== ADMINISTRACIÓN ====================

  async restartDevice(deviceId: string): Promise<void> {
    await this.checkDeviceRegistered(deviceId);
    await this.bridge.restartDevice(deviceId);
  }

  async testDeviceVoice(deviceId: string, voiceIndex: number = 0): Promise<void> {
    await this.checkDeviceRegistered(deviceId);
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

  async ensureConnected(deviceId: string): Promise<void> {
    if (this.connectionPool[deviceId]) return;

    // Si no está conectado, intentamos buscarlo en la DB
    const id = parseInt(deviceId);
    if (isNaN(id)) {
      throw new Error(`ID de dispositivo inválido: ${deviceId}`);
    }

    console.log(`[DeviceManager] Buscando dispositivo ${id} en la base de datos...`);
    // Necesitamos importar el repositorio aquí o pasarlo al constructor.
    // Por simplicidad en este paso, asumimos que podemos instanciarlo o que el controller ya lo hizo.
    // Pero lo ideal es que el Service lo maneje.
    const { DeviceRepository } = await import('../repository/device.repository.ts');
    const repo = new DeviceRepository();
    const device = await repo.findById(id);

    if (!device) {
      throw new Error(`Dispositivo con ID ${id} no encontrado en la base de datos`);
    }

    if (!device.ip) {
      throw new Error(`El dispositivo ${id} no tiene una IP configurada`);
    }

    await this.registerDevice({
      deviceId: deviceId,
      ip: device.ip,
      port: device.port || 4370
    });
  }

  private async checkDeviceRegistered(deviceId: string): Promise<void> {
    await this.ensureConnected(deviceId);
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