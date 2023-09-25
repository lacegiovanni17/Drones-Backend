// src/routes/droneRoutes.ts
import express from 'express';
import { DroneController } from '../controller/droneController';
import { validateInput, validateMedical , validateLoadedMedication, validateAvailableDrone, validateBattery } from '../middleware/validate';

const droneRoutes = express.Router();
const droneController = new DroneController();

// Route to register a new drone
droneRoutes.post('/register', validateInput, droneController.registerDrone);

// Route to load medication onto a drone
droneRoutes.post('/load', validateMedical, droneController.loadMedication);

// Route to get loaded medication for a given drone
droneRoutes.get('/:droneId/loaded-medication', validateLoadedMedication, droneController.getLoadedMedication);

// Route to get available drones for loading
droneRoutes.get('/available-drones', validateAvailableDrone, droneController.getAvailableDrones);

// Route to check the battery level for a given drone
droneRoutes.get('/:droneId/battery-level', validateBattery, droneController.getBatteryLevel);

export default droneRoutes;
