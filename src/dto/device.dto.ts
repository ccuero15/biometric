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
        status: z.enum([ 'ONLINE', 'OFFLINE' ]).optional(),
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

export type RegisterDeviceDTO = z.infer<typeof CreateDeviceSchema>[ 'body' ];
export type UpdateDeviceDTO = z.infer<typeof UpdateDeviceSchema>[ 'body' ];
export type CreateUserDeviceDTO = z.infer<typeof CreateUserDeviceSchema>[ 'body' ];