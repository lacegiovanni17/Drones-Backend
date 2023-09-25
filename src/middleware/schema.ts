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

export const validateMedication = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z0-9-_]+$/)
    .max(100)
    .required(),

  weight: Joi.number()
    .min(0)
    .required(),

  code: Joi.string()
    .pattern(/^[A-Z_0-9]+$/)
    .required(),

  image: Joi.string() // Assuming 'image' is a URL or file path
    .max(255) // Adjust the max length as needed
    .uri() // You can use 'uri' validation if it's a URL, otherwise use a different validation method
    .required(),
});

export const validateLoadedMedicals = Joi.object({
  params: Joi.object({
    droneId: Joi.number()
      .integer()
      .min(1) // Adjust the minimum value as needed
      .required(),
  }),
});

export const availableDrone = Joi.object({
        params: Joi.object({
            droneId: Joi.number()
                .integer()
                .min(1) // Adjust the minimum value as needed
                .required(),
        }),
});

export const batteryHealth =  Joi.object({
        params: Joi.object({
            droneId: Joi.number()
                .integer()
                .min(1) // Adjust the minimum value as needed
                .required(),
        }),
});

export const drugMedication = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Z0-9-_]+$/)
        .max(100)
        .required(),
})

export const specificMedication = Joi.object({
        params: Joi.object({
            medicationId: Joi.number()
                .integer()
                .min(1) // Adjust the minimum value as needed
                .required(),
        }),
});


