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
        const logs = await this.bridge.fetchRemoteAttendance(dev.ip!);

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let saved = 0;
        for (const log of logs) {
            const logDate = new Date(log.recordTime);
            if (logDate >= today) {
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
                            timestamp: logDate
                        });
                        saved++;
                    }
                }
            }
        }
        return { saved };
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
        const remoteUser = remoteUsers.find(u => u.userid === user.cedula);

        if (!remoteUser) {
            throw new BadRequestError("El usuario no existe en este dispositivo. Sincronice primero.");
        }

        return await this.bridge.startEnrollment(dev.ip!, remoteUser.uid);
    }

    async syncTemplates(deviceId: number) {
        const dev = await this.getDeviceOrThrow(deviceId);
        const [ remoteUsers, remoteTemplates ] = await Promise.all([
            this.bridge.fetchRemoteUsers(dev.ip!),
            this.bridge.fetchRemoteTemplates(dev.ip!)
        ]);

        let synced = 0;
        for (const tmp of remoteTemplates.data) {
            const rUser = remoteUsers.find(u => u.uid === tmp.uid);
            if (!rUser) continue;

            // Limpiar ID
            const cleanCedula = Number(rUser.userid.replace(/\D/g, ''));

            // Buscamos por cedula numérica
            const dbUser = await this.userRepo.findByCedula(cleanCedula);
            if (!dbUser) continue;

            const { encryptedData, iv } = encrypt(tmp.template);
            await this.biometricRepo.saveTemplate(dbUser.id, tmp.fingerIndex, encryptedData, iv);
            synced++;
        }

        return { synced };
    }

    async listDbUsers() {
        return await this.userRepo.findAll();
    }
}