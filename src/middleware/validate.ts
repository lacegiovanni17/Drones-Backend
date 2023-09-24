import { Request, Response, NextFunction } from "express";
import { schema } from "./schema";


export const validateInput = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};

