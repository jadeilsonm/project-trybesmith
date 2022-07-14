import { Request, Response, Router } from 'express';
import validateSchemaOrds from '../middlewares/order.middlewares';
import validateToken from '../middlewares/valiateToken.middlewares';
import ordersServices from '../services/orders.services';

const ordersRouter = Router();

ordersRouter.get('/', async (__req: Request, res: Response): Promise<Response> => {
  const orders = await ordersServices.getOrders();  
  return res.status(200).json(orders);
});

ordersRouter.post(
  '/', 
  validateToken,

  validateSchemaOrds,

  async (req: Request, res: Response): Promise<Response> => {
    const { payload } = res.locals;
    const orders = await ordersServices.creatOrders(req.body, payload);  
    return res.status(201).json(orders);
  },
);

export default ordersRouter;