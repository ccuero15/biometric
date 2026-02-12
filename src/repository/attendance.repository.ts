import prisma from '@/lib/prisma.ts';
import { BaseRepository } from './base.repository.ts';

import { Prisma } from '@prisma/client';

export class AttendanceRepository extends BaseRepository<any> {
    constructor() {
        super(prisma.attendanceRecord);
    }

    async findByTimestamp(userId: number, timestamp: Date) {
        return await this.model.findFirst({
            where: { userId, timestamp }
        });
    }

    async saveLog(data: Prisma.AttendanceRecordUncheckedCreateInput) {
        return await this.model.create({ data });
    }
}
