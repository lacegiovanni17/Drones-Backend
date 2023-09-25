"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSpecificDrug = exports.validateDrug = exports.validateBattery = exports.validateAvailableDrone = exports.validateLoadedMedication = exports.validateMedical = exports.validateInput = void 0;
const schema_1 = require("./schema");
const validateInput = (req, res, next) => {
    const { error, value } = schema_1.schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateInput = validateInput;
const validateMedical = (req, res, next) => {
    const { error, value } = schema_1.validateMedication.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateMedical = validateMedical;
const validateLoadedMedication = (req, res, next) => {
    const { error, value } = schema_1.validateLoadedMedicals.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateLoadedMedication = validateLoadedMedication;
const validateAvailableDrone = (req, res, next) => {
    const { error, value } = schema_1.availableDrone.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateAvailableDrone = validateAvailableDrone;
const validateBattery = (req, res, next) => {
    const { error, value } = schema_1.batteryHealth.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateBattery = validateBattery;
const validateDrug = (req, res, next) => {
    const { error, value } = schema_1.drugMedication.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateDrug = validateDrug;
const validateSpecificDrug = (req, res, next) => {
    const { error, value } = schema_1.specificMedication.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            message: error.message,
        });
    }
    next();
};
exports.validateSpecificDrug = validateSpecificDrug;
