import prisma from '@/lib/prisma.ts';
import { BaseRepository } from './base.repository.ts';

export class AttendanceRepository extends BaseRepository<any> {
    constructor() {
        super(prisma.attendanceRecord);
    }

    async findByTimestamp(userId: string, timestamp: Date) {
        return await this.model.findFirst({
            where: { userId, timestamp }
        });
    }

    async saveLog(data: { userId: string, deviceId: number, timestamp: Date }) {
        return await this.model.create({ data });
    }
}
