import prisma from '@/lib/prisma.ts';
import { BaseRepository } from './base.repository.ts';

export class DeviceRepository extends BaseRepository<any> {
    constructor() {
        super(prisma.biometricDevice);
    }

    async findBySerial(serial: string) {
        return await this.model.findUnique({
            where: { serial }
        });
    }

    async findActive() {
        return await this.model.findMany({
            where: { isDeleted: false },
            include: { branchOffice: true }
        });
    }

    async softDelete(id: number) {
        return await this.model.update({
            where: { id },
            data: { isDeleted: true, status: 'OFFLINE' }
        });
    }
}
