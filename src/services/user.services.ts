import IUsers from '../interfaces/users.interface';
import userModel from '../models/user.model';
import JWTToken from '../utils/JWTToken';

const createdUser = async (user: IUsers): Promise<string> => {
  const { insertId } = await userModel.createdUser(user);
  let token = '';
  if (insertId) token = JWTToken.generateJWTToken(JSON.stringify(user));
  return token;
};

export default { createdUser };