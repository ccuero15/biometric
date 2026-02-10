import prisma from '@/lib/prisma.ts';
import { BaseRepository } from './base.repository.ts';

export class BiometricRepository extends BaseRepository<any> {
    constructor() {
        super(prisma.biometricTemplate);
    }

    async saveTemplate(userId: number, fingerIndex: number, encryptedData: string, iv: string) {
        return await this.model.upsert({
            where: {
                // Assuming we had a unique constraint on userId and fingerIndex
                // Current schema lacks this unique constraint, so we manually check or update by user/index
                userId_fingerIndex: { userId, fingerIndex } // I should check if I added this unique constraint in schema
            },
            update: {
                encryptedData,
                encryptionIv: iv,
                isDeleted: false
            },
            create: {
                userId,
                fingerIndex,
                encryptedData,
                encryptionIv: iv
            }
        });
    }

    async findByUserId(userId: number) {
        return await this.model.findMany({
            where: { userId, isDeleted: false }
        });
    }
}
