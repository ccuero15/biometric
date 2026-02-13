import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'http';
import helmet from 'helmet';
import mainRouter from './routes/index.ts';
import { errorMiddleware } from './controller/middleware/error.middleware.ts';
import { NotFoundError } from './lib/errors.ts';
import { deviceManager } from './services/DeviceManagerService.ts';
import { AttendanceSocketServer } from './lib/websocket/AttendanceSocket.ts';
import { ZKPythonBridge } from './lib/ZKPythonBridge.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const httpServer = createServer(app);

// --- Middlewares ---
app.use(helmet()); // Seguridad de cabeceras
app.use(express.json()); // Para entender JSON en el body

// --- Rutas ---
app.use('/api', mainRouter);

app.use((_req, _res, next) => {
  next(new NotFoundError());
});

app.use(errorMiddleware);

// Inicialización
async function bootstrap(): Promise<void> {
  try {
    console.log('🚀 Iniciando Biometric API...');
    
    // 1. Conectar al Python Bridge
    await deviceManager.initialize();
    console.log('✅ Conectado a Python Bridge');
    
    // 2. Iniciar WebSocket Server para frontend
    const wsServer = new AttendanceSocketServer(httpServer);
    console.log('✅ WebSocket Server iniciado');
    
    // 3. Iniciar HTTP Server
    httpServer.listen(PORT, () => {
      console.log(`✅ API REST escuchando en http://localhost:${PORT}`);
      console.log(`📡 WebSocket disponible en ws://localhost:${PORT}`);
    });

    // 4. Graceful shutdown
    process.on('SIGTERM', async () => {
      console.log('SIGTERM recibido. Cerrando graceful...');
      await deviceManager.shutdown();
      httpServer.close(() => {
        console.log('Servidor cerrado');
        process.exit(0);
      });
    });

    process.on('SIGINT', async () => {
      console.log('SIGINT recibido. Cerrando...');
      await deviceManager.shutdown();
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ Error fatal iniciando aplicación:', error);
    process.exit(1);
  }
}

bootstrap();