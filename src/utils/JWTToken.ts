import * as jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import IUsers from '../interfaces/users.interface';
import HttpException from './http.exeception';
import Messages from './messages';

const SECRET = process.env.JWT_SECRET || 'senhaSecreta';

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
};

export const generateJWTToken = (payload: string) => 
  jwt.sign(payload, SECRET, jwtConfig);

export const authenticateToken = async (token?: string) => {
  const status = StatusCodes.UNAUTHORIZED;
  if (!token) {
    throw new HttpException(status, Messages.TOKEN_NO_FOUND);
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection as IUsers;
  } catch (e) {
    throw new HttpException(status, Messages.TOKEN_INVALID);
  }
};
