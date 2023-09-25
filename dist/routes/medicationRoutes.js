"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// src/routes/medicationRoutes.ts
const express_1 = __importDefault(require("express"));
const medicationController_1 = require("../controller/medicationController");
const validate_1 = require("../middleware/validate");
const router = express_1.default.Router();
exports.router = router;
const medicationController = new medicationController_1.MedicationController();
// Route to create a new medication
router.post('/create', validate_1.validateDrug, medicationController.createMedication);
// Route to get details of a specific medication by ID
router.get('/:medicationId', validate_1.validateSpecificDrug, medicationController.getMedicationById);
