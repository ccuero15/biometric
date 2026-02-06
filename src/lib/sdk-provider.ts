import ZKLib from 'node-zklib';

export class ZKProvider {
  private zkInstance: any;
  private connected: boolean = false;

  constructor(private ip: string, private port: number = 4370) {}

  async connect(): Promise<void> {
    try {
      this.zkInstance = new ZKLib(this.ip, this.port, 10000, 4000);
      await this.zkInstance.createSocket();
      this.connected = true;
      console.log(`✅ Conectado al dispositivo: ${this.ip}`);
    } catch (error) {
      this.connected = false;
      throw new Error(`❌ Error de conexión con el lector: ${error}`);
    }
  }

  async disconnect(): Promise<void> {
    if (this.zkInstance && this.connected) {
      await this.zkInstance.disconnect();
      this.connected = false;
    }
  }

  // Método para extraer todos los usuarios del lector
  async getAllUsers() {
    return await this.zkInstance.getUsers();
  }

  // Método para obtener los registros de asistencia
  async getAttendanceLog() {
    return await this.zkInstance.getAttendance();
  }

  // Método para registrar un nuevo usuario en el dispositivo
  async setUser(uid: number, userid: string, name: string, password = "", role = 0) {
    return await this.zkInstance.setUser(uid, userid, name, password, role);
  }

  // Escuchar eventos en tiempo real (Marcajes)
  async getRealTimeLogs(callback: (log: any) => void) {
    this.zkInstance.getRealTimeLogs(callback);
  }
}