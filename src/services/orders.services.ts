import IOrders from '../interfaces/orders.interface';
import ordersModel from '../models/orders.model';

const getOrders = async (): Promise<IOrders[]> => ordersModel.getOrders();

export default { getOrders };
