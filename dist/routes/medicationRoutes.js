"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/medicationRoutes.ts
const express_1 = __importDefault(require("express"));
const medicationController_1 = require("../controller/medicationController");
const validate_1 = require("../middleware/validate");
const medicalRoutes = express_1.default.Router();
const medicationController = new medicationController_1.MedicationController();
// Route to create a new medication
medicalRoutes.post('/create', validate_1.validateDrug, medicationController.createMedication);
// Route to get details of a specific medication by ID
medicalRoutes.get('/:medicationId', validate_1.validateSpecificDrug, medicationController.getMedicationById);
// Add more routes as needed for medication management
exports.default = medicalRoutes;
