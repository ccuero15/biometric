import { z } from 'zod';

const ipv4Regex = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$/;

export const CreateDeviceSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    ip: z.string().regex(ipv4Regex, 'IP inválida'),
    port: z.number().int().positive().default(4370),
    branchOfficeId: z.number().int().positive('ID de sucursal inválido'),
  })
});

export const UpdateDeviceSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    ip: z.string().regex(ipv4Regex, 'IP inválida').optional(),
    port: z.number().int().positive().optional(),
    branchOfficeId: z.number().int().positive().optional(),
    status: z.enum(['ONLINE', 'OFFLINE']).optional(),
  })
});

export const CreateUserDeviceSchema = z.object({
  body: z.object({
    ip: z.string().regex(ipv4Regex, 'IP inválida'),
    user: z.object({
      cedula: z.coerce.number().int().positive('La cédula es obligatoria y debe ser numérica'),
      name: z.string().min(1, 'El nombre es obligatorio'),
      password: z.string().optional().default(''),
      role: z.number().int().min(0).max(255).default(0),
      cardno: z.string().optional().default('0'),
    })
  })
});

export const ConnectDeviceSchema = z.object({
  ip: z.string().regex(ipv4Regex, 'IP inválida'),
  deviceId: z.string().optional(), // Si no se provee, se deriva de la IP
  port: z.number().int().min(1).max(65535).default(4370),
  timeout: z.number().int().min(1).max(60).default(10),
  password: z.number().int().min(0).default(0)
});

export const CreateUserSchema = z.object({
  name: z.string().min(1, 'Nombre es requerido').max(50, 'Nombre muy largo'),
  userId: z.string().min(1, 'User ID (Cédula/Código) es requerido').max(20),
  uid: z.number().int().positive().optional(), // Opcional, el backend puede buscar el siguiente
  privilege: z.number().int().min(0).max(1).default(0),
  password: z.string().max(8).optional().default(''),
  groupId: z.string().max(10).optional().default('1'),
  card: z.number().int().min(0).optional().default(0)
});

export const DeviceCommandSchema = z.object({
  deviceId: z.string().min(1)
});

export const VoiceTestSchema = z.object({
  deviceId: z.string().min(1),
  index: z.number().int().min(0).max(55)
});

export const DeleteUserSchema = z.object({
  deviceId: z.string().min(1),
  uid: z.number().int().positive()
});

// ==========================================
// TIPOS INFERIDOS (Reemplazan las interfaces manuales)
// ==========================================

export type ConnectDeviceDto = z.infer<typeof ConnectDeviceSchema>;
export type CreateUserDto = z.infer<typeof CreateUserSchema>;
export type DeviceCommandDto = z.infer<typeof DeviceCommandSchema>;
export type VoiceTestDto = z.infer<typeof VoiceTestSchema>;
export type DeleteUserDto = z.infer<typeof DeleteUserSchema>;

// ==========================================
// HELPERS DE VALIDACIÓN
// ==========================================

/**
 * Valida datos contra un schema Zod y retorna resultado tipado
 */
export function validateDto<T extends z.ZodTypeAny>(
  schema: T,
  data: unknown
): { success: true; data: z.infer<T> } | { success: false; errors: z.ZodIssue[] } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  } else {
    return { success: false, errors: result.error.issues };
  }
}

/**
 * Valida y lanza excepción si falla (para uso en controllers)
 */
export function parseDto<T extends z.ZodTypeAny>(schema: T, data: unknown): z.infer<T> {
  return schema.parse(data);
}

/**
 * Formatea errores de Zod para respuesta HTTP
 */
export function formatZodErrors(errors: z.ZodIssue[]): Array<{ field: string; message: string }> {
  return errors.map((err) => ({
    field: err.path.join('.'),
    message: err.message
  }));
}

export type RegisterDeviceDTO = z.infer<typeof CreateDeviceSchema>['body'];
export type UpdateDeviceDTO = z.infer<typeof UpdateDeviceSchema>['body'];
export type CreateUserDeviceDTO = z.infer<typeof CreateUserDeviceSchema>['body'];