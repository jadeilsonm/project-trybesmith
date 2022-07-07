import { Router } from 'express';
import productsRouter from './controller/products.controller';
import userRouter from './controller/users.controller';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', userRouter);

export default router;