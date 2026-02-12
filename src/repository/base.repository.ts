
export class BaseRepository<T> {
    constructor(protected model: any) { }

    async findAll(params: any = {}): Promise<T[]> {
        return await this.model.findMany(params);
    }

    async findById(id: number, include: any = {}): Promise<T | null> {
        return await this.model.findUnique({
            where: { id },
            include
        });
    }

    async create(data: any): Promise<T> {
        return await this.model.create({ data });
    }

    async update(id: number, data: any): Promise<T> {
        return await this.model.update({
            where: { id },
            data
        });
    }

    async delete(id: number): Promise<T> {
        return await this.model.delete({
            where: { id }
        });
    }
}
