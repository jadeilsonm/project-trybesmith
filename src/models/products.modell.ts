import { ResultSetHeader } from 'mysql2';
import IProducts from '../interfaces/products.interface';
import connection from './connection';

const getProducts = async (): Promise<IProducts[]> => {
  const [rows] = await connection.execute('SELECT * FROM Trybesmith.Products;');
  return rows as IProducts[];
};

const createdProduct = async (products: IProducts) => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount) VALUES (?,?);', 
    [products.name, products.amount],
  );
  return result;
};

const updateProduct = async (orderId: number, id: number) => {
  const [result] = await connection
    .execute<ResultSetHeader>(
    'UPDATE  Trybesmith.Products SET orderId=? WHERE id=?;', 
    [orderId, id],
  );
  return result;
};

export default { getProducts, createdProduct, updateProduct };