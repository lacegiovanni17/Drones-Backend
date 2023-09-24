// src/routes/droneRoutes.ts
import express from 'express';
import { DroneController } from '../controller/droneController';
import { validateInput } from '../middleware/validate';

const router = express.Router();
const droneController = new DroneController();

// Route to register a new drone
router.post('/register', validateInput, droneController.registerDrone);

// Route to load medication onto a drone
router.post('/load', droneController.loadMedication);

// Route to get loaded medication for a given drone
router.get('/:droneId/loaded-medication', droneController.getLoadedMedication);

// Route to get available drones for loading
router.get('/available-drones', droneController.getAvailableDrones);

// Route to check the battery level for a given drone
router.get('/:droneId/battery-level', droneController.getBatteryLevel);

export { router };
