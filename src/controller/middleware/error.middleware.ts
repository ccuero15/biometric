import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/lib/errors.ts';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    let { statusCode, message } = err;

    if (!(err instanceof AppError)) {
        statusCode = 500;
        message = 'Error interno del servidor';
        console.error(err);
    }

    res.status(statusCode).json({
        success: false,
        message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};
