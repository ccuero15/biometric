import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares de seguridad y parsing
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Los templates pueden ser pesados

// Iniciamos el servidor
const server = app.listen(port, () => {
  console.log(`📡 Backend Biométrico corriendo en http://localhost:${port}`);
});

// Manejo de cierre gracioso (Graceful Shutdown)
process.on('SIGTERM', async () => {
  console.log('SIGTERM recibido. Cerrando conexiones...');
  //await prisma.$disconnect();
  server.close();
});