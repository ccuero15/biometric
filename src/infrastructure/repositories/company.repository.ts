import { Company } from "@/src/generated/client/index.ts";
import { BaseRepository } from "../database/base.repository.ts";

// Aquí le decimos que T es Company y el modelo es 'company'
export class CompanyRepository extends BaseRepository<Company, 'company'> {
  constructor() {
    super('company');
  }

  // Método específico sin perder el tipado
  async findByName(name: string): Promise<Company | null> {
    return await this.model.findUnique({
      where: { name, isDeleted: false }
    });
  }
}