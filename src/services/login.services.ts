import IToken from '../interfaces/token.interface';
import IUsers from '../interfaces/users.interface';
import selectUser from '../models/login.model';
import HttpException from '../utils/http.exeception';
import generateJWTToken from '../utils/JWTToken';

const login = async (u: IUsers): Promise<IToken> => {
  const allUser = await selectUser();
  const user = allUser.find((us: IUsers) => u.username === us.username 
  && u.password === us.password);
  if (!user) {
    throw new HttpException(401, 'Username or password invalid');
  }
  const token = generateJWTToken(JSON.stringify(user));
  
  return { token };
};

export default login;