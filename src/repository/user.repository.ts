import prisma from '@/lib/prisma.ts';
import { BaseRepository } from './base.repository.ts';

export class UserRepository extends BaseRepository<any> {
    constructor() {
        super(prisma.user);
    }

    async findByCedula(cedula: string) {
        return await this.model.findUnique({
            where: { cedula }
        });
    }

    async upsertFromDevice(data: { cedula: string, fullName: string, branchOfficeId: number }) {
        return await this.model.upsert({
            where: { cedula: data.cedula },
            update: { fullName: data.fullName },
            create: {
                cedula: data.cedula,
                fullName: data.fullName,
                email: `${data.cedula}@empresa.com`,
                branchOfficeId: data.branchOfficeId,
                password: 'default_hashed_password'
            }
        });
    }
}
