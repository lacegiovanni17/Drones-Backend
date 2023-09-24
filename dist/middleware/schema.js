"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
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
