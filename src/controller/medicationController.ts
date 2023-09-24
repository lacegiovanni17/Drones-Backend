// src/controllers/medicationController.ts
import { Request, Response } from 'express';
import { Medication } from '../models/Medication';

class MedicationController {
  // Create a new medication
  async createMedication(req: Request, res: Response) {
    try {
      const { name, weight, code, image } = req.body;

      const newMedication = await Medication.create({
        name,
        weight,
        code,
        image,
      });

      res.status(201).json(newMedication);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Get details of a specific medication by ID
  async getMedicationById(req: Request, res: Response) {
    try {
      const { medicationId } = req.params;

      const medication = await Medication.findByPk(medicationId);

      if (!medication) {
        return res.status(404).json({ error: 'Medication not found' });
      }

      res.status(200).json(medication);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Implement other controller methods for managing medications as needed
}

export { MedicationController };
