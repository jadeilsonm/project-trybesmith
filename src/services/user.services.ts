import IUsers from '../interfaces/users.interface';
import userModel from '../models/user.model';

const createdUser = async (user: IUsers): Promise<IUsers> => {
  const { insertId } = await userModel.createdUser(user);
  console.log(insertId);
  return user;
};

export default { createdUser };