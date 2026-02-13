# 🔐 Sistema de Gestión Biométrica ZKTeco

Sistema backend desarrollado en **Node.js** con **TypeScript** y **Prisma** para la gestión centralizada de dispositivos biométricos ZKTeco, control de asistencia y sincronización de usuarios.

## 🚀 Características Principales

- **Gestión de Dispositivos**: Alta, baja y monitoreo de estado (Online/Offline) de dispositivos ZKTeco.
- **Sincronización de Usuarios**: Carga y descarga de usuarios entre la base de datos y los dispositivos.
- **Control de Asistencia**:
  - Descarga automática de logs de asistencia.
  - Sincronización de hora automática para evitar registros con fechas futuras.
  - Detección inteligente de duplicados.
- **API RESTful**: Endpoints documentados para integración con frontend o sistemas externos.
- **Arquitectura Robusta**:
  - **Prisma ORM** con PostgreSQL.
  - **Servicios Modulares** (DeviceService, BiometricService).
  - **Manejo de Errores** centralizado.

## 🛠️ Tecnologías

- **Runtime**: Node.js (v18+)
- **Lenguaje**: TypeScript
- **Base de Datos**: PostgreSQL
- **ORM**: Prisma
- **Librería Biométrica**: `zklib-js` (UDP/TCP)
- **Validación**: Zod
- **Fecha/Hora**: date-fns

## 📋 Requisitos Previos

1. **Node.js** instalado.
2. **PostgreSQL** corriendo.
3. **Dispositivo ZKTeco** compatible (probado con modelos TFT/Linux).
   - *Nota: El dispositivo debe estar en la misma red o accesible por VPN.*

## ⚙️ Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repo>
   cd biometrico-app
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar entorno**:
   Crea un archivo `.env` basado en `.env.example`:
   ```env
   DATABASE_URL="postgresql://user:pass@localhost:5432/biometric_db"
   PORT=3000
   ```

4. **Inicializar Base de Datos**:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Iniciar Servidor**:
   ```bash
   npm run dev
   ```

## 🔌 Uso de la API

### 📡 Dispositivos

- `GET /api/devices` - Listar dispositivos.
- `POST /api/devices` - Registrar nuevo dispositivo.
  ```json
  {
    "name": "Puerta Principal",
    "ip": "192.168.1.201",
    "port": 4370,
    "branchOfficeId": 1
  }
  ```

### 🔄 Sincronización

1. **Sincronizar Usuarios (BD -> Dispositivo)**:
   ```bash
   POST /api/devices/:id/sync-users
   ```

2. **Sincronizar Asistencias (Dispositivo -> BD)**:
   ```bash
   POST /api/devices/:id/sync-attendance
   ```
   *Nota: Este endpoint sincroniza automáticamente la hora del dispositivo para garantizar la integridad de los datos.*

## ⚠️ Limitaciones Conocidas (ZKTeco Standalone)

1. **Templates de Huellas**: La librería `zklib-js` **NO soporta** la descarga de templates de huellas (algoritmo propietario).
   - **Solución Actual**: El registro de huellas debe realizarse **manualmente** en el dispositivo. El sistema sincroniza los IDs de usuario, y luego el administrador enrola la huella en el equipo físico.
2. **Timezone**: Los dispositivos suelen perder la hora o tener zonas horarias incorrectas.
   - **Solución**: El sistema fuerza una sincronización de hora (`CMD_SET_TIME`) antes de cada descarga de logs.

## 📄 Estructura del Proyecto

```
src/
├── controller/    # Controladores de la API
├── services/      # Lógica de negocio (DeviceService, BiometricService)
├── repository/    # Capa de acceso a datos (Prisma)
├── lib/           # Utilidades (ZKDevice wrapper, Crypto)
├── routes/        # Definición de rutas Express
└── interfaces/    # Tipos TypeScript
```
