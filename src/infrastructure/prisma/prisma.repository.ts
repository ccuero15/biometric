import { IBaseRepository, PrismaDelegate } from "@/src/core/interfaces/repository.interface.ts";
import prisma from "../database/prisma.ts";





/**
 * T: El tipo de la Entidad (ej. User)
 * K: Las llaves del PrismaClient que corresponden a modelos (ej. 'user' | 'biometricDevice')
 */
export abstract class PrismaRepository<T, K extends keyof typeof prisma> implements IBaseRepository<T> {

  constructor(protected readonly modelName: K) { }

  /**
   * Helper para acceder al modelo de forma tipada.
   * Aunque Prisma tiene una estructura compleja, forzamos el acceso seguro.
   */
  protected get db() {
    return prisma[ this.modelName ] as unknown as PrismaDelegate<T>;
    // Nota: El 'as any' interno es inevitable por la estructura de clases de Prisma, 
    // PERO la entrada y salida de los métodos será estrictamente T.
  }
  async create(data: Partial<T>): Promise<T> {
    return await this.db.create({ data });
  }

  async findById(id: number): Promise<T | null> {
    return await this.db.findUnique({
      where: { id, isDeleted: false }
    });
  }

  async findAll(): Promise<T[]> {
    return await this.db.findMany({
      where: { isDeleted: false }
    });
  }

  async update(id: number, data: Partial<T>): Promise<T> {
    return await this.db.update({
      where: { id },
      data
    });
  }

  async delete(id: number): Promise<boolean> {
    await this.db.update({
      where: { id },
      data: { isDeleted: true }
    });
    return true;
  }
}