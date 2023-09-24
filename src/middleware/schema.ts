import Joi from "joi";

export const schema = Joi.object({
    serialNumber: Joi.string()
        .min(3)
        .max(100)
        .required(),

    model: Joi.string()
            .required(),

    weightLimit: Joi.number()
        .min(0)
            .max(500),

    batteryCapacity: Joi.number()
        .min(0)
            .max(100),

    state: Joi.string()
            .required(),

     loadedMedicationId :  Joi.number()
         .integer(), // It can be null if the drone is not loaded

})
