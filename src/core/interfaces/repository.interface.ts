export interface IBaseRepository<T> {
  create(data: Partial<T>): Promise<T>;
  update(id: number, data: Partial<T>): Promise<T>;
  delete(id: number): Promise<boolean>;
  findById(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
}

export interface PrismaDelegate<T> {
  create(args: { data: unknown }): Promise<T>;
  findUnique(args: { where: unknown }): Promise<T | null>;
  findMany(args?: { where?: unknown }): Promise<T[]>;
  update(args: { where: unknown; data: unknown }): Promise<T>;
}