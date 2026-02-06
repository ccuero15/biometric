import prisma from "@/lib/prisma.ts";
import { ZKDevice } from "@/lib/zk.device.ts";

export class BiometricSDKService {
  /**
   * Obtiene todos los usuarios y sus huellas (si el SDK lo permite)
   */
  async syncDeviceUsers(ip: string) {
    const device = new ZKDevice(ip);
    
    try {
      await device.connect();
      console.log("Conectado. Obteniendo usuarios...");
      
      const users = await device.sdk.getUsers();
      const logs = await device.sdk.getRealTimeLogs((log) => {
        console.log("🔔 Nuevo registro detectado:", log);
      });
      
      // Aquí podrías mapear los usuarios a tu base de datos con Prisma
      return users.data;
    } 
    catch (error) {
      console.error("Error al sincronizar usuarios:", error);
      throw error;
    }
    finally {
      await device.disconnect();
    }
  }

  /**
   * Escucha en tiempo real cuando alguien pone el dedo
   */
  async startRealTimeMonitoring(ip: string) {
    const device = new ZKDevice(ip);
    await device.connect();

    console.log(`📡 Monitoreando eventos en vivo desde ${ip}...`);
    
    await device.sdk.getRealTimeLogs((log) => {
      console.log("🔔 Nuevo registro detectado:", log);
      // Aquí llamarías a un servicio para guardar la asistencia
    });
  }


  async getDailyAttendance(ip: string) {
    const device = new ZKDevice(ip);
    
    try {
      await device.connect();
      
      // 1. Obtenemos TODOS los marcajes del dispositivo
      const logs = await device.sdk.getAttendance();
      
      // 2. Definimos el inicio y fin del día de hoy
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // 3. Filtramos exclusivamente los de hoy
      const dailyLogs = logs.data.filter((log: any) => {
        const recordDate = new Date(log.recordTime);
        return recordDate >= today && recordDate < tomorrow;
      });

      // 4. Retornamos solo lo que nos interesa: ID de usuario y Hora
      return dailyLogs.map((log: any) => ({
        userId: log.deviceUserId,
        time: new Date(log.recordTime).toLocaleTimeString('es-ES'),
        fullDate: log.recordTime
      }));

    } finally {
      await device.disconnect();
    }
  }
 
  async syncDailyAttendance(ip: string, deviceId: number) {
  const logs = await this.getDailyAttendance(ip);

  for (const log of logs) {
    // Buscamos si el usuario existe en nuestra DB primero
    const user = await prisma.user.findUnique({
      where: { cedula: log.userId }
    });

    if (user) {
      // Evitamos duplicados: Solo guardamos si no existe un registro para ese usuario en ese segundo exacto
      await prisma.attendanceRecord.upsert({
        where: {
          // Nota: Para que esto funcione, podrías necesitar un índice único compuesto en tu schema
          id: 0 // Si no manejas IDs específicos, usamos create directamente o un check previo
        },
        create: {
          userId: user.id,
          deviceId: deviceId,
          timestamp: new Date(log.fullDate)
        },
        update: {} // No actualizamos nada si ya existe
      });
      
    }
  }
  return logs;
}
  
}