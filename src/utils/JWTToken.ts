import * as jwt from 'jsonwebtoken';
import IUsers from '../interfaces/users.interface';
import HttpException from './http.exeception';

const SECRET = process.env.JWT_SECRET || 'senhaSecreta';

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
};

export const generateJWTToken = (payload: string) => 
  jwt.sign(payload, SECRET, jwtConfig);

export const authenticateToken = async (token: string) => {
  if (token.length === 0) {
    throw new HttpException(401, 'Token not found');
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection as IUsers;
  } catch (e) {
    throw new HttpException(401, 'Invalid token');
  }
};
