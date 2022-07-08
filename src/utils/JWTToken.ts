import * as jwt from 'jsonwebtoken';
import HttpException from './http.exeception';

const SECRET = process.env.JWT_SECRET || 'senhaSecreta';

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
};

const generateJWTToken = (payload: string) => 
  jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = async (token: string) => {
  if (!token) {
    throw new HttpException(401, 'Token not found');
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return introspection;
  } catch (e) {
    throw new HttpException(401, 'Expired or invalid token');
  }
};

export default { generateJWTToken, authenticateToken };
