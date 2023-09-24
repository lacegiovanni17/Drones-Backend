// src/middleware/notFoundHandler.ts
import { Request, Response } from 'express';

export const notFoundHandler = (
  req: Request,
  res: Response
) => {
  res.status(404).json({ error: 'Not Found' });
};
