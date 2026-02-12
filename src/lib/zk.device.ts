import ZKLib, { ZKUserData, ZKAttendanceData } from 'zklib-js';

export class ZKDevice {
  private instance: ZKLib;
  private isConnected: boolean = false;
  private disconnectTimer: NodeJS.Timeout | null = null;
  private readonly AUTO_DISCONNECT_MS = 240000; // 4 minutos de gracia

  constructor(private ip: string, private port: number = 4370) {
    this.instance = new ZKLib(this.ip, this.port, 5000, 4000);
  }

  private resetDisconnectTimer(): void {
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
    }
    this.disconnectTimer = setTimeout(async () => {
      if (this.isConnected) {
        console.log(`[ZKDevice] Cierre automático por inactividad (${this.ip})`);
        await this.disconnect();
      }
    }, this.AUTO_DISCONNECT_MS);
  }

  private async connect(): Promise<void> {
    try {
      if (!this.isConnected) {
        await this.instance.createSocket();
        this.isConnected = true;
      }
      this.resetDisconnectTimer();
    } catch (error: unknown) {
      this.isConnected = false;
      throw error;
    }
  }

  private async disconnect(): Promise<void> {
    if (this.disconnectTimer) {
      clearTimeout(this.disconnectTimer);
      this.disconnectTimer = null;
    }

    if (this.isConnected) {
      try {
        await this.instance.disconnect();
      } catch (e) {
        // Silencio en desconexión
      } finally {
        this.isConnected = false;
      }
    }
  }

  async getAllUsers(): Promise<ZKUserData[]> {
    await this.connect();
    const result = await this.instance.getUsers();
    return result.data.map(user => ({
      ...user,
      name: this.cleanString(user.name),
      userid: this.cleanString((user as any).userId || user.userid)
    }));
  }

  async saveUser(user: ZKUserData): Promise<void> {
    await this.connect();
    // Native setUser from zklib-js simplifies buffer management
    await this.instance.setUser(
      user.uid,
      user.userid,
      user.name,
      user.password || '',
      user.role || 0,
      user.cardno || 0
    );
    // Refresh device data
    await this.instance.executeCmd(1013, '');
  }

  async removeUser(uid: number): Promise<void> {
    await this.connect();
    // CMD_DELETE_USER is 18
    const buf = Buffer.alloc(2);
    buf.writeUInt16LE(uid, 0);
    await this.instance.executeCmd(18, buf);
    await this.instance.executeCmd(1013, '');
  }

  async getNextUserId(): Promise<number> {
    const users = await this.getAllUsers();
    if (!users || users.length === 0) return 0;
    const uids = users.map(u => Number(u.uid)).filter(id => !isNaN(id));
    return uids.length > 0 ? Math.max(...uids) : 0;
  }


  async getTemplates(): Promise<any> {
    await this.connect();

    console.log(`[ZKDevice] ⚠️  LIMITACIÓN: zklib-js no soporta descarga de templates`);
    console.log(`[ZKDevice] Los templates de huellas NO pueden ser descargados con esta librería`);
    console.log(`[ZKDevice] Alternativas:`);
    console.log(`[ZKDevice]   1. Usar el SDK oficial de ZKTeco (C++/.NET)`);
    console.log(`[ZKDevice]   2. Registrar huellas directamente en el dispositivo`);
    console.log(`[ZKDevice]   3. Usar un servicio puente con el SDK oficial`);

    // Devolvemos un array vacío para no romper el flujo
    return {
      data: [],
      error: 'zklib-js no soporta descarga de templates de huellas',
      message: 'Esta funcionalidad requiere el SDK oficial de ZKTeco'
    };
  }


  async enrollUser_old(uid: number, fingerIndex: number = 0, flag: number = 1): Promise<void> {
    await this.connect();
    console.log("Métodos disponibles en ZKLib:", Object.keys(Object.getPrototypeOf(this.instance)));


    const commandData = Buffer.alloc(4);
    commandData.writeUInt16LE(uid, 0); // UID
    commandData.writeUInt16LE(0, 2);   // Finger ID (0)

    console.log(`[ZKDevice] Intentando enrolamiento para UID ${uid}...`);
    try {
      console.log(`[ZKDevice] Sending StartEnroll for UID ${uid}...`);
      const response = await this.instance.executeCmd(110, uid.toString());
      console.log("Response:", response);
      await this.instance.enableDevice();
      //await this.instance.executeCmd(61, buf);
      // Sin refresh inmediato para no interrumpir la UI del aparato
    } catch (error) {
      console.error("[ZKDevice] Enroll failed:", error);
      throw error;
    }
  }

  async enrollUser(uid: number): Promise<void> {
    await this.connect();

    try {
      console.log(`[ZKDevice] Preparando dispositivo para enrolamiento manual de UID ${uid}...`);

      // 1. Deshabilitar temporalmente para limpiar estado
      await this.instance.disableDevice();
      await new Promise(resolve => setTimeout(resolve, 300));

      // 2. Re-habilitar para que el usuario pueda interactuar
      await this.instance.enableDevice();

      console.log(`[ZKDevice] ========================================`);
      console.log(`[ZKDevice] DISPOSITIVO LISTO`);
      console.log(`[ZKDevice] ========================================`);
      console.log(`[ZKDevice] `);
      console.log(`[ZKDevice] INSTRUCCIONES PARA EL USUARIO:`);
      console.log(`[ZKDevice] 1. En el dispositivo, presiona MENU`);
      console.log(`[ZKDevice] 2. Ve a: User Mgt → Enroll User`);
      console.log(`[ZKDevice] 3. Ingresa el ID: ${uid}`);
      console.log(`[ZKDevice] 4. Registra la huella cuando lo solicite`);
      console.log(`[ZKDevice] `);
      console.log(`[ZKDevice] NOTA: zklib-js no soporta enrolamiento`);
      console.log(`[ZKDevice] remoto en la mayoría de firmwares ZK.`);
      console.log(`[ZKDevice] Debe hacerse manualmente en el dispositivo.`);
      console.log(`[ZKDevice] ========================================`);

    } catch (error) {
      console.error("[ZKDevice] Error al preparar dispositivo:", error);
      throw error;
    }
  }

  // Método de emergencia para desbloquear si se queda "tonto"
  async unlockForce(): Promise<void> {
    await this.connect();
    await this.instance.enableDevice();
    await this.instance.executeCmd(1013, '');
  }

  async fetchAttendanceLogs(): Promise<ZKAttendanceData[]> {
    await this.connect();
    // Native getAttendances in zklib-js
    const result = await this.instance.getAttendances();
    return result.data;
  }

  async listenRealTime(onLog: (log: any) => void): Promise<void> {
    await this.connect();
    await this.instance.getRealTimeLogs(onLog);
  }

  async purgeLogs(): Promise<void> {
    await this.connect();
    await this.instance.clearAttendanceLog();
  }

  async syncTime(): Promise<void> {
    await this.connect();

    // Obtener fecha/hora actual del servidor
    const now = new Date();

    try {
      // Intentar usar el método nativo si existe (algunas versiones de zklib lo tienen)
      if (typeof (this.instance as any).setTime === 'function') {
        console.log(`[ZKDevice] Sincronizando hora usando setTime nativo: ${now.toLocaleString()}`);
        await (this.instance as any).setTime(now);
        return;
      }

      // Si no, usar executeCmd con CMD_SET_TIME (201)
      // El formato de fecha en ZK es un entero de 32 bits codificado
      // ((Year-2000)*12*31 + ((Month-1)*31) + Day-1)*(24*60*60) + (Hour*60*60) + (Minute*60) + Second

      const t = this.encodeTime(now);
      console.log(`[ZKDevice] Sincronizando hora (CMD 201) a: ${now.toLocaleString()} (encoded: ${t})`);

      // Enviar comando
      // Nota: zklib-js executeCmd espera string para data en algunos casos, 
      // pero para setTime suele ser un entero. ZKLib UDP usa enteros, TCP puede variar.
      // Probaremos pasando el buffer de 4 bytes
      const buf = Buffer.alloc(4);
      buf.writeUInt32LE(t, 0);

      await this.instance.executeCmd(201, buf);
      console.log(`[ZKDevice] Hora sincronizada correctamente`);

    } catch (error) {
      console.error(`[ZKDevice] Error sincronizando hora:`, error);
      // No lanzamos error para no detener procesos masivos, solo logueamos
    }
  }

  // Utilidad para codificar fecha al formato ZK
  private encodeTime(date: Date): number {
    const year = date.getFullYear() % 100;
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return (
      ((year * 12 * 31 + (month - 1) * 31 + (day - 1)) * (24 * 60 * 60)) +
      (hour * 60 * 60) +
      (minute * 60) +
      second
    );
  }

  async lockDevice(): Promise<void> {
    await this.connect();
    await this.instance.disableDevice();
  }

  async unlockDevice(): Promise<void> {
    await this.connect();
    await this.instance.enableDevice();
  }

  async restart(): Promise<void> {
    await this.connect();
    // CMD_RESTART is 1004
    await this.instance.executeCmd(1004, '');
    this.isConnected = false;
  }

  private async getSafeInfo() {
    // CMD_GET_FREE_SIZES = 50
    const data = await this.instance.executeCmd(50, '');
    if (!Buffer.isBuffer(data)) return { userCounts: 0, logCounts: 0, logCapacity: 0 };

    return {
      userCounts: data.length >= 28 ? data.readUIntLE(24, 4) : 0,
      logCounts: data.length >= 44 ? data.readUIntLE(40, 4) : 0,
      logCapacity: data.length >= 76 ? data.readUIntLE(72, 4) : 0
    };
  }

  private cleanString(str: any): string {
    if (typeof str !== 'string') return String(str);
    // Elimina caracteres nulos y espacios extra
    return str.replace(/\0/g, '').trim();
  }

  async getFullHardwareInfo() {
    try {
      await this.connect();
      const [ firmware, time, serial, name, info ] = await Promise.all([
        this.instance.getFirmware(),
        this.instance.getTime(),
        this.instance.getSerialNumber(),
        this.instance.getDeviceName(),
        this.getSafeInfo()
      ]);

      return {
        firmware: this.cleanString(firmware),
        time,
        serial: this.cleanString(serial),
        name: this.cleanString(name),
        pin: this.cleanString(serial),
        stats: info
      };
    } finally {
      await this.disconnect();
    }
  }

  async terminate(): Promise<void> {
    await this.disconnect();
  }
}
