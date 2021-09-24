import { Request, Response, NextFunction } from 'express';

const isAdmin = true;

export const checkAdmin = (req: Request, res: Response, next: NextFunction) => {
	isAdmin ? next() : res.status(401).json({ error: -1, descripcion: `Ruta ${req.originalUrl}, metodo ${req.method} no autorizado`}); 
};