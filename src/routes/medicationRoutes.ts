// src/routes/medicationRoutes.ts
import express from 'express';
import { MedicationController } from '../controller/medicationController';
import { validateDrug, validateSpecificDrug } from '../middleware/validate';


const router = express.Router();
const medicationController = new MedicationController();

// Route to create a new medication
router.post('/create', validateDrug, medicationController.createMedication);

// Route to get details of a specific medication by ID
router.get('/:medicationId', validateSpecificDrug, medicationController.getMedicationById);

// Add more routes as needed for medication management

export { router };
