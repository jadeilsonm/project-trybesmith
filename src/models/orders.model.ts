import { ResultSetHeader } from 'mysql2';
import IOrders from '../interfaces/orders.interface';
import connection from './connection';

// https://docs.intersystems.com/irislatest/csp/docbook/DocBook.UI.Page.cls?KEY=RSQL_JSONARRAYAGG
const getOrders = async (): Promise<IOrders[]> => {
  const [rows] = await connection.execute(`
    SELECT o.userId, o.id, json_arrayagg(p.id) as productsIds
    FROM Trybesmith.Orders AS o 
    INNER JOIN Trybesmith.Products as p ON p.orderId = o.id GROUP BY o.id
    ORDER BY o.userId;`);
  return rows as IOrders[];
};

const creatOrders = async (id: number) => {
  const [result] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders(userId) VALUES(?)', [id]);
  return result;
};

export default { getOrders, creatOrders };