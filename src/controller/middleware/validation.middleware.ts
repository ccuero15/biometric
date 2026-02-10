import { Request, Response, NextFunction } from 'express';
import { z, ZodError, ZodTypeAny } from 'zod';
import { BadRequestError } from '@/lib/errors.ts';

export const validate = (schema: ZodTypeAny) => {
    return async (req: Request, _res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
            });
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                const message = error.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
                return next(new BadRequestError(message));
            }
            next(error);
        }
    };
};
