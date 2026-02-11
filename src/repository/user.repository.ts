import prisma from '@/lib/prisma.ts';
import { BaseRepository } from './base.repository.ts';

export class UserRepository extends BaseRepository<any> {
    constructor() {
        super(prisma.user);
    }

    async findByCedula(cedula: number) {
        return await this.model.findUnique({
            where: { cedula }
        });
    }

    async upsertFromDevice(data: { cedula: number, fullName: string, branchOfficeId: number }) {
        const numericCedula = Math.floor(data.cedula);
        return await this.model.upsert({
            where: { cedula: numericCedula },
            update: { fullName: data.fullName },
            create: {
                cedula: numericCedula,
                fullName: data.fullName,
                email: `${numericCedula}@empresa.com`,
                branchOfficeId: data.branchOfficeId,
                password: 'default_hashed_password'
            }
        });
    }

    async findAll() {
        return await this.model.findMany({
            where: { isDeleted: false },
            include: { branchOffice: true }
        });
    }
}
