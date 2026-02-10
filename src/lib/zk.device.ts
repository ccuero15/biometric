import ZKLib, { ZKUserData, ZKAttendanceData } from 'zklib-js';

export class ZKDevice {
  private instance: ZKLib;
  private isConnected: boolean = false;
  private disconnectTimer: NodeJS.Timeout | null = null;
  private readonly AUTO_DISCONNECT_MS = 240000; // 1 minuto de gracia

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
    return result.data;
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
    // CMD_USERTEMP_RRQ es 9, pero zklib-js suele tenerlo o requiere executeCmd
    // Intentaremos con executeCmd para control total del buffer
    return await this.instance.executeCmd(9, '');
  }

  async enrollUser(uid: number): Promise<void> {
    await this.connect();
    // CMD_STARTENROLL = 61
    const buf = Buffer.alloc(4);
    buf.writeUInt32LE(uid, 0);
    await this.instance.executeCmd(61, buf);
    // Refrescar para que el aparato sepa que hay cambios
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
    // zklib-js doesn't have setTime, but it has getTime.
    // For now we keep it empty or implement it if critical later.
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

  async getFullHardwareInfo() {
    try {
      await this.connect();
      const [ firmware, time, serial, name, info ] = await Promise.all([
        this.instance.getFirmware(),
        this.instance.getTime(),
        this.instance.getSerialNumber(),
        this.instance.getDeviceName(),
        this.instance.getInfo()
      ]);
      return { firmware, time, serial, name, pin: serial, stats: info };
    } finally {
      await this.disconnect();
    }
  }

  async terminate(): Promise<void> {
    await this.disconnect();
  }
}
