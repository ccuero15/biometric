import { BiometricHardwareBridge } from "./biometric-sdk.services.ts";
import { RegisterDeviceDTO, UpdateDeviceDTO, CreateUserDeviceDTO } from "@/dto/device.dto.ts";
import { ZKUserData } from "zklib-js";
import { DeviceRepository } from "@/repository/device.repository.ts";
import { UserRepository } from "@/repository/user.repository.ts";
import { AttendanceRepository } from "@/repository/attendance.repository.ts";
import { BiometricRepository } from "@/repository/biometric.repository.ts";
import { NotFoundError, BadRequestError } from "@/lib/errors.ts";
import { encrypt } from "@/lib/crypto.ts";

import prisma from "@/lib/prisma.ts";
import { format, parse } from "date-fns";


export class DeviceService {
    private bridge = new BiometricHardwareBridge();
    private deviceRepo = new DeviceRepository();
    private userRepo = new UserRepository();
    private attendanceRepo = new AttendanceRepository();
    private biometricRepo = new BiometricRepository();

    async seedDatabase() {
        const branchCount = await prisma.branchOffice.count();
        if (branchCount > 0) return { message: "La base de datos ya tiene sucursales." };

        const company = await prisma.company.create({
            data: { name: "Empresa Principal" }
        });

        const branch = await prisma.branchOffice.create({
            data: {
                name: "Sede Paraiso",
                companyId: company.id
            }
        });

        return { company, branch };
    }

    async syncUsers(deviceId: number) {
        const dev = await this.getDeviceOrThrow(deviceId);
        const users = await this.bridge.fetchRemoteUsers(dev.ip!);

        console.log(`[Sync] Sincronizando ${users.length} usuarios del dispositivo ${dev.ip}`);

        for (const u of users) {
            const numericId = Number(u.userid.replace(/\D/g, ''));

            if (isNaN(numericId) || numericId <= 0) {
                console.warn(`[Sync] Saltando usuario con ID inválido: ${u.userid} (${u.name})`);
                continue;
            }

            await this.userRepo.upsertFromDevice({
                cedula: numericId,
                fullName: u.name,
                branchOfficeId: dev.branchOfficeId
            });
        }
        return { count: users.length };
    }

    async syncTodayLogs(deviceId: number) {
        const dev = await this.getDeviceOrThrow(deviceId);

        // 1. Sincronizar hora del dispositivo primero para evitar fechas futuras
        console.log(`[DeviceService] Sincronizando hora del dispositivo ${dev.ip} con el servidor...`);
        try {
            await this.bridge.setTime(dev.ip!);
        } catch (e) {
            console.warn(`[DeviceService] No se pudo sincronizar la hora, continuando con la descarga...`, e);
        }

        console.log(`[DeviceService] Sincronizando asistencias de HOY para ${dev.name} (${dev.ip})`);

        try {
            const logs = await this.bridge.fetchRemoteAttendance(dev.ip!);
            console.log(`[DeviceService] Total logs recuperados del dispositivo: ${logs.length}`);

            const today = new Date();
            today.setHours(0, 0, 0, 0);

            let saved = 0;
            let skipped = 0;

            for (const log of logs) {
                const dateFormated = format(log.recordTime, 'yyyy-MM-dd HH:mm:ss').replace(' ', 'T') + '.000Z';
                const logDate = new Date(dateFormated.toString());

                console.log(logDate);
                console.log(dateFormated);
                if (logDate >= today) {
                    //formatear fecha
                    // Limpiar ID por si acaso trae prefijos
                    const cleanCedula = Number(log.deviceUserId.replace(/\D/g, ''));

                    // Buscamos al usuario por su cédula numérica
                    const user = await this.userRepo.findByCedula(cleanCedula);

                    if (user) {
                        const exists = await this.attendanceRepo.findByTimestamp(user.id, logDate);
                        if (!exists) {
                            await this.attendanceRepo.saveLog({
                                userId: user.id,
                                deviceId,
                                timestamp: logDate,
                            });

                            console.log(`[DeviceService] + Nuevo registro: ${user.fullName} @ ${logDate.toISOString()}`);
                            saved++;
                        } else {
                            skipped++;
                        }
                    } else {
                        console.warn(`[DeviceService] Usuario no encontrado para ID dispositivo: ${log.deviceUserId}`);
                    }
                }
            }

            console.log(`[DeviceService] Sincronización finalizada: ${saved} nuevos, ${skipped} ya existían`);
            return { saved, total: logs.length, skipped };
        } catch (error) {
            console.error(`[DeviceService] Error sincronizando asistencias:`, error);
            throw error;
        }
    }

    async reboot(deviceId: number) {
        const dev = await this.getDeviceOrThrow(deviceId);
        return await this.bridge.reboot(dev.ip!);
    }

    private async getDeviceOrThrow(id: number) {
        const device = await this.deviceRepo.findById(id);
        if (!device || !device.ip) throw new NotFoundError("Dispositivo no encontrado");
        return device;
    }

    async createDevice(data: RegisterDeviceDTO) {
        const hardware = await this.bridge.getDeviceInfo(data.ip);

        if (!hardware.pin) {
            throw new BadRequestError("No se pudo obtener información del dispositivo.");
        }

        const serial = hardware.pin.toString();

        // Verificar si la sucursal existe antes de crear el dispositivo
        const branchExists = await prisma.branchOffice.findUnique({
            where: { id: data.branchOfficeId }
        });

        if (!branchExists) {
            throw new BadRequestError(`La sucursal con ID ${data.branchOfficeId} no existe. Use /api/devices/seed para inicializar si es necesario.`);
        }

        const existing = await this.deviceRepo.findBySerial(serial);
        if (existing) {
            throw new BadRequestError(`El dispositivo con serial ${serial} ya está registrado.`);
        }

        return await this.deviceRepo.create({
            name: data.name,
            ip: data.ip,
            port: data.port,
            serial: serial,
            branchOfficeId: data.branchOfficeId,
            status: 'ONLINE',
            lastSync: new Date()
        });
    }

    async getAllDevices() {
        return await this.deviceRepo.findActive();
    }

    async getDeviceById(id: number) {
        const device = await this.deviceRepo.findById(id, { branchOffice: true });
        if (!device) throw new NotFoundError("Dispositivo no encontrado.");
        return device;
    }

    async updateDevice(id: number, data: UpdateDeviceDTO) {
        return await this.deviceRepo.update(id, data);
    }

    async deleteDevice(id: number) {
        return await this.deviceRepo.softDelete(id);
    }

    async getAllUsers(ip: string) {
        return await this.bridge.fetchRemoteUsers(ip);
    }

    async createUser(ip: string, user: CreateUserDeviceDTO[ 'user' ]) {
        return await this.bridge.createUser(ip, user);
    }

    async startEnrollment(deviceId: number, userId: number) {
        const dev = await this.getDeviceOrThrow(deviceId);
        const user = await this.userRepo.findById(userId);
        if (!user) throw new NotFoundError("Usuario no encontrado.");

        // Obtenemos los usuarios del dispositivo para encontrar el UID correcto
        const remoteUsers = await this.bridge.fetchRemoteUsers(dev.ip!);
        const remoteUser = remoteUsers.find(u => {
            const numericId = Number(u.userid.replace(/\D/g, ''));
            return numericId === user.cedula;
        });

        if (!remoteUser) {
            throw new BadRequestError(`El usuario con cédula ${user.cedula} no existe en este dispositivo. Sincronice primero.`);
        }

        return await this.bridge.startEnrollment(dev.ip!, remoteUser.uid);
    }

    async syncTemplates(deviceId: number) {
        const dev = await this.getDeviceOrThrow(deviceId);

        console.log(`[DeviceService] Iniciando sincronización de huellas del dispositivo ${dev.name} (${dev.ip})`);

        try {
            const [ remoteUsers, remoteTemplates ] = await Promise.all([
                this.bridge.fetchRemoteUsers(dev.ip!),
                this.bridge.fetchRemoteTemplates(dev.ip!)
            ]);

            console.log(`[DeviceService] Usuarios remotos encontrados: ${remoteUsers.length}`);
            console.log(`[DeviceService] Templates remotos encontrados: ${remoteTemplates.data?.length || 0}`);

            // Verificar si hay un error de limitación de zklib-js
            if (remoteTemplates.error) {
                console.warn(`[DeviceService] ⚠️  ${remoteTemplates.error}`);
                return {
                    synced: 0,
                    errors: 0,
                    total: 0,
                    message: remoteTemplates.message || 'zklib-js no soporta descarga de templates',
                    limitation: true,
                    alternatives: [
                        'Usar el SDK oficial de ZKTeco (C++/.NET)',
                        'Registrar huellas directamente en el dispositivo',
                        'Implementar un servicio puente con el SDK oficial',
                        'Las huellas ya están en el dispositivo y funcionan para autenticación'
                    ]
                };
            }

            if (!remoteTemplates.data || remoteTemplates.data.length === 0) {
                console.warn(`[DeviceService] No se encontraron templates en el dispositivo`);
                return { synced: 0, errors: 0, message: "No hay huellas registradas en el dispositivo" };
            }

            let synced = 0;
            let errors = 0;
            const errorDetails: string[] = [];

            for (const tmp of remoteTemplates.data) {
                try {
                    if (!tmp.uid || tmp.uid === 0) {
                        console.warn(`[DeviceService] Template sin UID válido, saltando...`);
                        errors++;
                        continue;
                    }

                    const rUser = remoteUsers.find(u => u.uid === tmp.uid);
                    if (!rUser) {
                        console.warn(`[DeviceService] No se encontró usuario remoto para UID ${tmp.uid}`);
                        errors++;
                        errorDetails.push(`UID ${tmp.uid}: Usuario no encontrado en dispositivo`);
                        continue;
                    }

                    const cleanCedula = Number(rUser.userid.replace(/\D/g, ''));

                    if (isNaN(cleanCedula) || cleanCedula <= 0) {
                        console.warn(`[DeviceService] Cédula inválida para usuario ${rUser.name}: ${rUser.userid}`);
                        errors++;
                        errorDetails.push(`${rUser.name}: Cédula inválida (${rUser.userid})`);
                        continue;
                    }

                    const dbUser = await this.userRepo.findByCedula(cleanCedula);
                    if (!dbUser) {
                        console.warn(`[DeviceService] Usuario con cédula ${cleanCedula} no existe en BD`);
                        errors++;
                        errorDetails.push(`Cédula ${cleanCedula}: No existe en base de datos`);
                        continue;
                    }

                    if (!tmp.template || tmp.template.length === 0) {
                        console.warn(`[DeviceService] Template vacío para usuario ${dbUser.fullName}`);
                        errors++;
                        errorDetails.push(`${dbUser.fullName}: Template vacío`);
                        continue;
                    }

                    const { encryptedData, iv } = encrypt(tmp.template);
                    await this.biometricRepo.saveTemplate(
                        dbUser.id,
                        tmp.fingerIndex || 0,
                        encryptedData,
                        iv
                    );

                    console.log(`[DeviceService] ✓ Huella sincronizada: ${dbUser.fullName} (dedo ${tmp.fingerIndex || 0})`);
                    synced++;
                } catch (error) {
                    console.error(`[DeviceService] Error procesando template UID ${tmp.uid}:`, error);
                    errors++;
                    errorDetails.push(`UID ${tmp.uid}: ${error instanceof Error ? error.message : 'Error desconocido'}`);
                }
            }

            console.log(`[DeviceService] Sincronización completada: ${synced} exitosas, ${errors} errores`);

            return {
                synced,
                errors,
                total: remoteTemplates.data.length,
                errorDetails: errorDetails.length > 0 ? errorDetails : undefined
            };
        } catch (error) {
            console.error(`[DeviceService] Error crítico en sincronización de templates:`, error);
            throw error;
        }
    }

    async listDbUsers() {
        return await this.userRepo.findAll();
    }
}