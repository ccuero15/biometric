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

    // 1. Conectar al Python Bridge (Reintentar si no está listo aún)
    let connected = false;
    let attempts = 0;
    while (!connected && attempts < 10) {
      try {
        await deviceManager.initialize();
        connected = true;
        console.log('✅ Conectado a Python Bridge');
      } catch (e) {
        attempts++;
        console.log(`📡 Esperando Python Bridge (Intento ${attempts}/10)...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    if (!connected) throw new Error('No se pudo conectar al Python Bridge tras 10 intentos');

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