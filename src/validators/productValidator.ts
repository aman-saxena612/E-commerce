import Joi from 'joi';

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().optional(),
  imageUrl: Joi.string().optional(),
  tag: Joi.string().required(),
  categoryId: Joi.number().required(),
});

export const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().optional(),
  description: Joi.string().optional(),
  imageUrl: Joi.string().optional(),
  tag: Joi.string().optional(),
  categoryId: Joi.number().optional(),
});