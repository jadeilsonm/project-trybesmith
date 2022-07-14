import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Joi from 'joi';
import IUsers from '../interfaces/users.interface';
import HttpException from '../utils/http.exeception';

const loginSchema = Joi.object<IUsers>({
  username: Joi.string().required(), 
  password: Joi.string().required(),
});

const validateSchemaLogin = (req: Request, __res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(
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

export default validateSchemaLogin;