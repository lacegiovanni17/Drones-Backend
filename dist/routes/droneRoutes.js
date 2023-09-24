"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// src/routes/droneRoutes.ts
const express_1 = __importDefault(require("express"));
const droneController_1 = require("../controller/droneController");
const validate_1 = require("../middleware/validate");
const router = express_1.default.Router();
exports.router = router;
const droneController = new droneController_1.DroneController();
// Route to register a new drone
router.post('/register', validate_1.validateInput, droneController.registerDrone);
// Route to load medication onto a drone
router.post('/load', droneController.loadMedication);
// Route to get loaded medication for a given drone
router.get('/:droneId/loaded-medication', droneController.getLoadedMedication);
// Route to get available drones for loading
router.get('/available-drones', droneController.getAvailableDrones);
// Route to check the battery level for a given drone
router.get('/:droneId/battery-level', droneController.getBatteryLevel);
