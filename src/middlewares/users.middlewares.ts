import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as Joi from 'joi';
import IUsers from '../interfaces/users.interface';
import HttpException from '../utils/http.exeception';

const usersSchema = Joi.object<IUsers>({
  username: Joi.string().min(3).required(), 
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const validSchemaUser = (req: Request, __res: Response, next: NextFunction) => {
  const { error } = usersSchema.validate(
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

export default validSchemaUser;