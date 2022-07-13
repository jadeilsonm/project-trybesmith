import IToken from '../interfaces/token.interface';
import IUsers from '../interfaces/users.interface';
import userModel from '../models/user.model';
import generateJWTToken from '../utils/JWTToken';

const createdUser = async (user: IUsers): Promise<IToken> => {
  const { insertId } = await userModel.createdUser(user);
  let token = '';
  if (insertId) token = generateJWTToken(JSON.stringify(user));
  return { token };
};

export default { createdUser };