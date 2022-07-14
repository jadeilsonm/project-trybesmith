export interface IOrder {
  productsIds: number[],
}

interface IOrders extends IOrder {
  id?: number,
  userId: number,
}

export default IOrders;
