import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Joi from 'joi';
import IProducts from '../interfaces/products.interface';
import HttpException from '../utils/http.exeception';

const productsSchema = Joi.object<IProducts>({
  name: Joi.string().min(3).required(),
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
  let status = StatusCodes.UNPROCESSABLE_ENTITY;
  if (message.includes('is required')) status = StatusCodes.BAD_REQUEST;
  throw new HttpException(status, message);
};

export default validSchemaProducts;