import { Router } from 'express';
import loginRouter from './controller/login.controller';
import ordersRouter from './controller/orders.controller';
import productsRouter from './controller/products.controller';
import userRouter from './controller/users.controller';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;