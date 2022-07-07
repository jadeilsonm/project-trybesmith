import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';
import IUsers from '../interfaces/users.interface';
import HttpException from '../utils/http.exeception';

const productsSchema = Joi.object<IUsers>({
  username: Joi.string().min(2).required()
    .messages({ 'string.min': '{{#label}} length must be at least 3 characters long' }),
  classe: Joi.string().min(2).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validSchemaUser = (req: Request, __res: Response, next: NextFunction) => {
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

export default validSchemaUser;