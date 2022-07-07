import { Request, Response, Router } from 'express';
import validSchemaProducts from '../middlewares/products.middlewares';
import productsServices from '../services/products.services';

const productsRouter = Router();

productsRouter.get('/', async (__req: Request, res: Response): Promise<Response> => {
  const products = await productsServices.getProducts();  
  return res.status(200).json(products);
});

productsRouter.post(
  '/', 
  validSchemaProducts,
  async (req: Request, res: Response): Promise<Response> => {
    const product = await productsServices.createdProduct(req.body);
    return res.status(201).json(product);
  },
);

export default productsRouter;