import IUsers from '../interfaces/users.interface';
import connection from './connection';

const selectUser = async (): Promise<IUsers[]> => {
  const [result] = await connection
    .execute(
      'SELECT * FROM Trybesmith.Users;',
    );
  return result as IUsers[];
};

export default selectUser;