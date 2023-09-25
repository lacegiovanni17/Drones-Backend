// src/controllers/droneController.ts
import { Request, Response } from 'express';
import { Drone } from '../models/Drone';
import { Medication } from '../models/Medication';
import { Op } from 'sequelize';

interface CreateDroneRequest {
  body: {
    serialNumber: string;
    model: string;
    weightLimit: number;
    batteryCapacity: number;
  };
}

interface LoadMedicationRequest {
  body: {
    droneId: number;
    medicationId: number;
  };
}

class DroneController {
  // Register a new drone
  async registerDrone(req: Request<{}, {}, CreateDroneRequest>, res: Response) {
    try {
      const { serialNumber, model, weightLimit, batteryCapacity }:any = req.body;

      const newDrone = await Drone.create({
        serialNumber,
        model,
        weightLimit,
        batteryCapacity,
        state: 'IDLE', // Default state
      });

      res.status(201).json(newDrone);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Load medication onto a drone
  async loadMedication(req: Request, res: Response) {
    try {
      const { droneId, medicationId } = req.body;

      const drone = await Drone.findByPk(droneId);
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
        await drone.save();
        res.status(200).json({ message: 'Drone is loading medication' });
      } else {
        res.status(400).json({ error: 'Drone battery level too low for loading' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getLoadedMedication(req: Request, res: Response) {
    try {
      const { droneId } = req.params;

      // Find the drone by ID
      const drone = await Drone.findByPk(droneId);

      if (!drone) {
        return res.status(404).json({ error: 'Drone not found' });
      }

      if (drone.state !== 'LOADED') {
        return res.status(400).json({ error: 'Drone is not loaded' });
      }

      // If the drone is loaded, retrieve the loaded medication
      const loadedMedication = await Medication.findOne({
        where: { id: drone.loadedMedicationId }, // Assuming you store loaded medication's ID in the drone model
      });

      if (!loadedMedication) {
        return res.status(404).json({ error: 'Loaded medication not found' });
      }

      res.status(200).json(loadedMedication);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    }


    async getAvailableDrones(req: Request, res: Response) {
    try {
      // Find all drones that are in the IDLE state and have sufficient battery level
      const availableDrones = await Drone.findAll({
        where: {
          state: 'IDLE',
          batteryCapacity: {
            [Op.gte]: 25, // Sequelize operator for greater than or equal to
          },
        },
      });

      if (availableDrones.length === 0) {
        return res.status(404).json({ error: 'No available drones found' });
      }

      res.status(200).json(availableDrones);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    }
    
  async getBatteryLevel(req: Request, res: Response) {
    try {
      const { droneId } = req.params;

      // Find the drone by ID
      const drone = await Drone.findByPk(droneId);

      if (!drone) {
        return res.status(404).json({ error: 'Drone not found' });
      }

      const batteryLevel = drone.batteryCapacity; // Assuming battery level is stored as a percentage

      res.status(200).json({ batteryLevel });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  // Implement other controller methods as needed
}

export { DroneController };
