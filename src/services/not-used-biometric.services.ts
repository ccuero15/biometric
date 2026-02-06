import { IBiometricProvider } from "@/interfaces/biometric-provider.interface.ts";
import prisma from "@/lib/prisma.ts";


export class BiometricService {
  constructor(private readonly provider: IBiometricProvider) {}

  async enrollUser(userId: number, ip: string, port: number) {
    try {
      // 1. Conectar al lector
      const connected = await this.provider.connect(ip, port);
      if (!connected) throw new Error("No se pudo conectar al lector");

      // 2. Pedir captura de huella (SDK)
      const rawTemplate = await this.provider.captureFingerprint();

      // 3. Lógica de negocio: Guardar en DB (Aquí llamarías a tu lógica de cifrado)
      const template = await prisma.biometricTemplate.create({
        data: {
          userId,
          encryptedData: rawTemplate, // Simplificado para el ejemplo
          encryptionIv: "iv_generado",
          fingerIndex: 0,
          qualityScore: 0
        }
      });

      await this.provider.disconnect();
      return template;
    } catch (error) {
      console.error("Error en enrolamiento:", error);
      throw error;
    }
  }
}