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
exports.MedicationController = void 0;
const Medication_1 = require("../models/Medication");
class MedicationController {
    // Create a new medication
    createMedication(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, weight, code, image } = req.body;
                const newMedication = yield Medication_1.Medication.create({
                    name,
                    weight,
                    code,
                    image,
                });
                res.status(201).json(newMedication);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
    // Get details of a specific medication by ID
    getMedicationById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { medicationId } = req.params;
                const medication = yield Medication_1.Medication.findByPk(medicationId);
                if (!medication) {
                    return res.status(404).json({ error: 'Medication not found' });
                }
                res.status(200).json(medication);
            }
            catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
    }
}
exports.MedicationController = MedicationController;
