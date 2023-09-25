import { Request, Response, NextFunction } from "express";
import { schema, validateMedication, validateLoadedMedicals, availableDrone, batteryHealth, drugMedication, specificMedication  } from "./schema";


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

export const validateMedical = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = validateMedication.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};

export const validateLoadedMedication = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = validateLoadedMedicals.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};

export const validateAvailableDrone = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = availableDrone.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};

export const validateBattery = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = batteryHealth.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};

export const validateDrug = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = drugMedication.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};

export const validateSpecificDrug = (req: Request, res:Response, next: NextFunction) => {
    const { error, value } = specificMedication.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
