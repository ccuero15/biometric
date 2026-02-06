import ZKLib from 'node-zklib';

/**
 * Clase encargada exclusivamente de la comunicación de bajo nivel
 * con el lector ZKTeco.
 */
export class ZKDevice {
  private instance: ZKLib;
  private isConnected: boolean = false;

  constructor(private ip: string, private port: number = 4370) {
    // Timeout de 10s, puerto local 4000 para UDP
    this.instance = new ZKLib(this.ip, this.port, 10000, 4000);
  }

  async connect(): Promise<void> {
    try {
      await this.instance.createSocket();
      this.isConnected = true;
    } catch (error) {
      throw new Error(`Fallo de conexión UDP con ${this.ip}: ${error}`);
    }
  }

  async disconnect(): Promise<void> {
    if (this.isConnected) {
      await this.instance.disconnect();
      this.isConnected = false;
    }
  }

  // Método para obtener información básica del hardware
  async getDeviceInfo() {
    this.ensureConnection();
    const name = await this.instance.getDeviceName();
    const firmware = await this.instance.getFirmware();
    return { name, firmware };
  }

  private ensureConnection() {
    if (!this.isConnected) throw new Error("Dispositivo no conectado.");
  }

  // Acceso directo a la instancia para métodos avanzados
  get sdk() {
    return this.instance;
  }

  async getSerialNumber(): Promise<string> {
    // El SDK de node-zklib a veces no trae el serial directo, 
    // pero podemos usar getFirmware() o similares como identificador único si es necesario.
    return await this.instance.getPIN(); // O el método que el SDK proporcione para identificarlo
  }
}