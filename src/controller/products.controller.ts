import { Request, Response, Router } from "express";
import productsServices from "../services/products.services";

const productsRouter = Router();

productsRouter.get('/', async (__req: Request, res: Response): Promise<Response> => {
  const products = await productsServices.getProducts();  
  return res.status(200).json(products);
});


export default productsRouter;