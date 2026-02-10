import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import mainRouter from './routes/index.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares ---
app.use(helmet()); // Seguridad de cabeceras
app.use(express.json()); // Para entender JSON en el body

import { errorMiddleware } from './controller/middleware/error.middleware.ts';
import { NotFoundError } from './lib/errors.ts';

// --- Rutas ---
app.use('/api', mainRouter);

app.use((_req, _res, next) => {
  next(new NotFoundError());
});

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`
  🚀 Servidor Biométrico listo
  📡 Puerto: ${PORT}
  🔗 Base URL: http://localhost:${PORT}/api
  `);
});