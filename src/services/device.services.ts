import { prisma } from '../lib/prisma.js';
import { RegisterDeviceDTO } from '../dto/device.dto.js';

export class DeviceService {

    async createDevice(data: RegisterDeviceDTO) {
        // 1. Validar si el serial ya existe para evitar duplicados
        const existing = await prisma.biometricDevice.findUnique({
            where: { serial: data.serial }
        });

        if (existing) {
            throw new Error(`El dispositivo con serial ${data.serial} ya está registrado.`);
        }

        // 2. Crear en la base de datos
        return await prisma.biometricDevice.create({
            data: {
                name: data.name,
                serial: data.serial,
                ip: data.ip,
                port: data.port,
                branchOfficeId: data.branchOfficeId,
                status: 'ONLINE' // Por defecto al registrar
            }
        });
    }

    async getAllDevices() {
        // Retorna todos los dispositivos que no estén marcados como eliminados
        return await prisma.biometricDevice.findMany({
            where: {
                //isDeleted: false
            },
            // Esto traerá también los datos de la sucursal asociada
            include: {
                branchOffice: true
            }
        });
    }
}