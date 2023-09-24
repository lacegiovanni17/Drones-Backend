"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DroneController = void 0;
const Drone_1 = require("../models/Drone");
const Medication_1 = require("../models/Medication");
const sequelize_1 = require("sequelize");
class DroneController {
    // Register a new drone
    registerDrone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { serialNumber, model, weightLimit, batteryCapacity } = req.body;
                const newDrone = yield Drone_1.Drone.create({
                    serialNumber,
                    model,
                    weightLimit,
                    batteryCapacity,
                    state: 'IDLE', // Default state
                });
                res.status(201).json(newDrone);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Load medication onto a drone
    loadMedication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { droneId, medicationId } = req.body;
                const drone = yield Drone_1.Drone.findByPk(droneId);
                if (!drone) {
                    return res.status(404).json({ error: 'Drone not found' });
                }
                // Check if the drone can carry the medication based on weight limit
                // Implement this logic based on your requirements
                const medicationWeight = 200; // Example medication weight
                if (drone.weightLimit < medicationWeight) {
                    return res.status(400).json({ error: 'Drone cannot carry this medication' });
                }
                // Update the drone's state to LOADING if battery level is sufficient
                // Implement battery level check based on your requirements
                const batteryLevel = 30; // Example battery level
                if (batteryLevel >= 25) {
                    drone.state = 'LOADING';
                    yield drone.save();
                    res.status(200).json({ message: 'Drone is loading medication' });
                }
                else {
                    res.status(400).json({ error: 'Drone battery level too low for loading' });
                }
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getLoadedMedication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { droneId } = req.params;
                // Find the drone by ID
                const drone = yield Drone_1.Drone.findByPk(droneId);
                if (!drone) {
                    return res.status(404).json({ error: 'Drone not found' });
                }
                if (drone.state !== 'LOADED') {
                    return res.status(400).json({ error: 'Drone is not loaded' });
                }
                // If the drone is loaded, retrieve the loaded medication
                const loadedMedication = yield Medication_1.Medication.findOne({
                    where: { id: drone.loadedMedicationId }, // Assuming you store loaded medication's ID in the drone model
                });
                if (!loadedMedication) {
                    return res.status(404).json({ error: 'Loaded medication not found' });
                }
                res.status(200).json(loadedMedication);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getAvailableDrones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Find all drones that are in the IDLE state and have sufficient battery level
                const availableDrones = yield Drone_1.Drone.findAll({
                    where: {
                        state: 'IDLE',
                        batteryCapacity: {
                            [sequelize_1.Op.gte]: 25, // Sequelize operator for greater than or equal to
                        },
                    },
                });
                if (availableDrones.length === 0) {
                    return res.status(404).json({ error: 'No available drones found' });
                }
                res.status(200).json(availableDrones);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    getBatteryLevel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { droneId } = req.params;
                // Find the drone by ID
                const drone = yield Drone_1.Drone.findByPk(droneId);
                if (!drone) {
                    return res.status(404).json({ error: 'Drone not found' });
                }
                const batteryLevel = drone.batteryCapacity; // Assuming battery level is stored as a percentage
                res.status(200).json({ batteryLevel });
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.DroneController = DroneController;
