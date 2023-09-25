"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/droneRoutes.ts
const express_1 = __importDefault(require("express"));
const droneController_1 = require("../controller/droneController");
const validate_1 = require("../middleware/validate");
const droneRoutes = express_1.default.Router();
const droneController = new droneController_1.DroneController();
// Route to register a new drone
droneRoutes.post('/register', validate_1.validateInput, droneController.registerDrone);
// Route to load medication onto a drone
droneRoutes.post('/load', validate_1.validateMedical, droneController.loadMedication);
// Route to get loaded medication for a given drone
droneRoutes.get('/:droneId/loaded-medication', validate_1.validateLoadedMedication, droneController.getLoadedMedication);
// Route to get available drones for loading
droneRoutes.get('/available-drones', validate_1.validateAvailableDrone, droneController.getAvailableDrones);
// Route to check the battery level for a given drone
droneRoutes.get('/:droneId/battery-level', validate_1.validateBattery, droneController.getBatteryLevel);
exports.default = droneRoutes;
