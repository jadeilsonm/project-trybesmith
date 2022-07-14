import IOrders, { IOrder } from '../interfaces/orders.interface';
import IUsers from '../interfaces/users.interface';
import ordersModel from '../models/orders.model';
import productsModell from '../models/products.modell';

const getOrders = async (): Promise<IOrders[]> => ordersModel.getOrders();

const creatOrders = async (order: IOrder, user: IUsers): Promise<IOrders> => {
  const userId = user.id || 0;
  const { insertId } = await ordersModel.creatOrders(userId);
  Promise.all(order.productsIds.map(async (p: number) => {
    productsModell.updateProduct(insertId, p);
  }));
  return { userId, productsIds: order.productsIds };
};

export default { getOrders, creatOrders };
