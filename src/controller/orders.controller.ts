import { Request, Response, Router } from 'express';
import ordersServices from '../services/orders.services';

const ordersRouter = Router();

ordersRouter.get('/', async (__req: Request, res: Response): Promise<Response> => {
  const orders = await ordersServices.getOrders();  
  return res.status(200).json(orders);
});

export default ordersRouter;