import * as jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'senhaSecreta';

const jwtConfig: jwt.SignOptions = {
  algorithm: 'HS256',
};

const generateJWTToken = (payload: string) => 
  jwt.sign(payload, SECRET, jwtConfig);

export default generateJWTToken;
