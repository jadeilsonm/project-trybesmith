import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import { IOrder } from '../interfaces/orders.interface';
import HttpException from '../utils/http.exeception';

// https://joi.dev/api/?v=17.6.0#arrayincludesrequiredunknowns
const productsSchema = Joi.object<IOrder>({
  productsIds: Joi.array().items(Joi.number().min(1).required()).required(),
}).messages({ 'array.includesRequiredUnknowns': '{{#label}} must include only numbers' });

const validateSchemaOrds = (req: Request, __res: Response, next: NextFunction) => {
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

export default validateSchemaOrds;