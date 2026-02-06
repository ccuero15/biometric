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

// --- Rutas ---
// Todo lo que entre por /api pasará por nuestro router maestro
app.use('/api', mainRouter);

// --- Manejo de errores básico ---
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(PORT, () => {
  console.log(`
  🚀 Servidor Biométrico listo
  📡 Puerto: ${PORT}
  🔗 Base URL: http://localhost:${PORT}/api
  `);
});