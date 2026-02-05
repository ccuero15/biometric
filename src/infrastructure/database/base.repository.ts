import { PrismaDelegate } from "@/src/core/interfaces/repository.interface.ts";
import { prisma } from "./prisma.js";

/**
 * T: Entidad (ej. Company)
 * K: El nombre del modelo en Prisma (ej. 'company')
 */
export abstract class BaseRepository<T, K extends keyof typeof prisma> {
  
  constructor(protected readonly modelName: K) {}

  // Usamos un getter para acceder al modelo con tipado dinámico pero seguro
  protected get model() {
    // Forzamos el tipo al modelo específico del cliente generado
    return prisma[this.modelName] as unknown as PrismaDelegate<T>; 
  }

  async create(data: Partial<T>): Promise<T> {
    return await this.model.create({
      data,
    });
  }

  async findAll(): Promise<T[]> {
    return await this.model.findMany({
      where: { isDeleted: false },
    });
  }

  async findById(id: number): Promise<T | null> {
    return await this.model.findUnique({
      where: { id },
    });
  }
}