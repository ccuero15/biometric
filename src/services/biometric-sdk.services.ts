import { ZKDevice } from "@/lib/zk.device.ts";
import { ZKUserData } from "zklib-js";

export class BiometricHardwareBridge {

    // --- MÉTODOS DE LECTURA (DATA CRUDA) ---
    async fetchRemoteUsers(ip: string) {
        const device = new ZKDevice(ip);
        try {
            const users = await device.getAllUsers();
            return users;
        } catch (error) {
            throw error;
        } finally {
            await device.terminate();
        }
    }

    async fetchRemoteAttendance(ip: string) {
        const device = new ZKDevice(ip);
        try {
            const logs = await device.fetchAttendanceLogs();
            return logs;
        } finally {
            await device.terminate();
        }
    }

    // --- MÉTODOS DE ACCIÓN (HARDWARE) ---
    async reboot(ip: string) {
        const device = new ZKDevice(ip);
        try {
            await device.restart(); // Usa instance.reboot() internamente
        } finally {
            await device.terminate();
        }
    }

    async setTime(ip: string) {
        const device = new ZKDevice(ip);
        try {
            await device.syncTime(); // Usa instance.setTime()
        } finally {
            await device.terminate();
        }
    }

    async getDeviceInfo(ip: string) {
        const device = new ZKDevice(ip);
        try {
            // Estos métodos vienen de tu definición de ZKLib
            const info = await device.getFullHardwareInfo();

            return info;
        } finally {
            await device.terminate();
        }
    }

    async createUser(ip: string, user: Omit<ZKUserData, 'uid' | 'userid'> & { cedula: number }) {
        const device = new ZKDevice(ip);

        try {
            const lastId = await device.getNextUserId();
            const nextId = lastId + 1;

            const newUser = {
                uid: nextId,
                userid: user.cedula.toString(),
                name: user.name,
                password: user.password,
                role: user.role,
                cardno: user.cardno
            }
            await device.saveUser(newUser);
            return newUser;
        } finally {
            await device.terminate();
        }
    }

    async startEnrollment(ip: string, uid: number) {
        // Validación IP
        if (!ip || typeof ip !== 'string') {
            throw new Error(`IP inválida para enrolamiento: ${ip}`);
        }

        const device = new ZKDevice(ip);
        try {
            console.log(`[Bridge] Conectando a ${ip} para enrolar UID ${uid}...`);
            await device.enrollUser(uid);
            console.log(`[Bridge] Comando enviado exitosamente.`);
        } catch (error) {
            console.error(`[Bridge] Error al enrolar:`, error);
            throw error;
        } finally {
            await device.terminate();
        }
    }

    async fetchRemoteTemplates(ip: string) {
        const device = new ZKDevice(ip);
        try {
            return await device.getTemplates();
        } finally {
            await device.terminate();
        }
    }
}
