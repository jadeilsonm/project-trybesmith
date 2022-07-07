import { ResultSetHeader } from 'mysql2';
import IUsers from '../interfaces/users.interface';
import connection from './connection';

const createdUser = async (user: IUsers) => {
  const { username, classe, password, level } = user;
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?,?,?,?)', 
    [username, classe, level, password],
  );
  return result;
};

export default { createdUser };