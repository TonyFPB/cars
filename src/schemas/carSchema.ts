import joi from "joi";

export const carSchema = joi.object({
  id: joi.number(),
  model: joi.string().required(),
  licensePlate: joi.string().length(7).required(),
  year: joi.string().required(),
  color: joi.string().required()
});