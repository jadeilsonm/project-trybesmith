import { Router } from 'express';
import productsRouter from './controller/products.controller';

const router = Router();

router.use('/products', productsRouter);

export default router;