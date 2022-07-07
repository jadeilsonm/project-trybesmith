import IProducts from '../interfaces/products.interface';
import connection from './connection';

const getProducts = async (): Promise<IProducts[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return rows as IProducts[];
};

export default { getProducts };