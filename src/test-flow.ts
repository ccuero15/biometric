import { CompanyRepository } from './infrastructure/repositories/company.repository.ts';
import { prisma } from './infrastructure/database/prisma.ts';

async function testBiometricFlow() {
  console.log('🚀 Iniciando prueba de flujo de arquitectura...');
  
  const companyRepo = new CompanyRepository();

  try {
    // 1. Crear una empresa
    console.log('--- Pasos 1: Creando Empresa ---');
    const newCompany = await companyRepo.create({
      name: 'Corporación Biométrica Global',
    });
    console.log('✅ Empresa creada con éxito:', newCompany);

    // 2. Listar empresas (Verificar el findAll tipado)
    console.log('\n--- Paso 2: Listando Empresas ---');
    const companies = await companyRepo.findAll();
    console.log(`📊 Total de empresas encontradas: ${companies.length}`);
    companies.forEach(c => {
      // Aquí tenemos autocompletado total: c.id, c.name, etc.
      console.log(` - ID: ${c.id} | Nombre: ${c.name}`);
    });

  } catch (error) {
    console.error('❌ Error en el flujo:', error);
  } finally {
    // Es vital cerrar el pool al terminar scripts independientes
    await prisma.$disconnect();
    console.log('\n🔌 Conexión a DB cerrada.');
  }
}

testBiometricFlow();