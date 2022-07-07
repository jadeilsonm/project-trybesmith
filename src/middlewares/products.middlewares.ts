import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import HttpException from '../utils/http.exeception';

const productsSchema = Joi.object({
  name: Joi.string().min(2).required()
    .messages({ 'string.min': '{{#label}} length must be at least 3 characters long' }),
  amount: Joi.string().min(3).required(),
});

const validSchemaProducts = (req: Request, __res: Response, next: NextFunction) => {
  const { error } = productsSchema.validate(
    req.body,
    { abortEarly: false },
  );
  if (!error) {
    return next();
  }
  const [message] = error.details.map((e) => e.message);
  let status = 422;
  if (message.includes('is required')) status = 400;
  throw new HttpException(status, message);
};

export default validSchemaProducts;