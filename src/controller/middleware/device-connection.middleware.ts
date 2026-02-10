import { Request, Response, NextFunction } from 'express';
import { ZKDevice } from '@/lib/zk.device.ts';

export const validateBiometricConnection = async (req: Request, res: Response, next: NextFunction) => {
  const { ip, port } = req.body;

  if (!ip) {
    return res.status(400).json({ success: false, message: "La IP es obligatoria para validar el dispositivo." });
  }

  const testDevice = new ZKDevice(ip, port || 4370);

  try {
    // Intentamos obtener información básica como prueba de vida
    // getDeviceDetails es el método que creamos en tu clase ZKDevice
    await testDevice.getFullHardwareInfo();

    console.log(`✅ Conexión exitosa con el biométrico en ${ip}`);

    await testDevice.terminate();
    next(); // Si todo sale bien, pasamos al controlador
  } catch (error) {
    await testDevice.terminate();
    return res.status(408).json({ 
      success: false, 
      message: `No se pudo establecer comunicación con el biométrico en ${ip}:${port || 4370}. Verifique que el equipo esté encendido y conectado a la red.`,
      error: error as Error
    });
  }
};