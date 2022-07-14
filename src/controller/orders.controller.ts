import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import validateSchemaOrds from '../middlewares/order.middlewares';
import validateToken from '../middlewares/valiateToken.middlewares';
import ordersServices from '../services/orders.services';

const ordersRouter = Router();

ordersRouter.get('/', async (__req: Request, res: Response): Promise<Response> => {
  const orders = await ordersServices.getOrders();  
  return res.status(StatusCodes.OK).json(orders);
});

ordersRouter.post(
  '/', 
  validateToken,

  validateSchemaOrds,

  async (req: Request, res: Response): Promise<Response> => {
    const { payload } = res.locals;
    const orders = await ordersServices.creatOrders(req.body, payload);  
    return res.status(StatusCodes.CREATED).json(orders);
  },
);

export default ordersRouter;