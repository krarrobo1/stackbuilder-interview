import { Request, Response, NextFunction } from 'express';


// Manejar los errores
export function fallback(err: any, req: Request, res: Response, next: NextFunction) {
    const { message } = err;
    return res.status(500).json({ message: message || 'Something went wrong' });
}