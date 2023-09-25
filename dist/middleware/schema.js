"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.specificMedication = exports.drugMedication = exports.batteryHealth = exports.availableDrone = exports.validateLoadedMedicals = exports.validateMedication = exports.schema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.schema = joi_1.default.object({
    serialNumber: joi_1.default.string()
        .min(3)
        .max(100)
        .required(),
    model: joi_1.default.string()
        .required(),
    weightLimit: joi_1.default.number()
        .min(0)
        .max(500),
    batteryCapacity: joi_1.default.number()
        .min(0)
        .max(100),
    state: joi_1.default.string()
        .required(),
    loadedMedicationId: joi_1.default.number()
        .integer(), // It can be null if the drone is not loaded
});
exports.validateMedication = joi_1.default.object({
    name: joi_1.default.string()
        .pattern(/^[a-zA-Z0-9-_]+$/)
        .max(100)
        .required(),
    weight: joi_1.default.number()
        .min(0)
        .required(),
    code: joi_1.default.string()
        .pattern(/^[A-Z_0-9]+$/)
        .required(),
    image: joi_1.default.string() // Assuming 'image' is a URL or file path
        .max(255) // Adjust the max length as needed
        .uri() // You can use 'uri' validation if it's a URL, otherwise use a different validation method
        .required(),
});
exports.validateLoadedMedicals = joi_1.default.object({
    params: joi_1.default.object({
        droneId: joi_1.default.number()
            .integer()
            .min(1) // Adjust the minimum value as needed
            .required(),
    }),
});
exports.availableDrone = joi_1.default.object({
    params: joi_1.default.object({
        droneId: joi_1.default.number()
            .integer()
            .min(1) // Adjust the minimum value as needed
            .required(),
    }),
});
exports.batteryHealth = joi_1.default.object({
    params: joi_1.default.object({
        droneId: joi_1.default.number()
            .integer()
            .min(1) // Adjust the minimum value as needed
            .required(),
    }),
});
exports.drugMedication = joi_1.default.object({
    name: joi_1.default.string()
        .pattern(/^[a-zA-Z0-9-_]+$/)
        .max(100)
        .required(),
});
exports.specificMedication = joi_1.default.object({
    params: joi_1.default.object({
        medicationId: joi_1.default.number()
            .integer()
            .min(1) // Adjust the minimum value as needed
            .required(),
    }),
});
