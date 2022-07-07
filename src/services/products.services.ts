import IProducts from '../interfaces/products.interface';
import productsModel from '../models/products.modell';

const getProducts = (): Promise<IProducts[]> => productsModel.getProducts();

const createdProduct = async (products: IProducts): Promise<IProducts> => {
  const { insertId } = await productsModel.createdProduct(products);
  return {
    id: insertId,
    name: products.name,
    amount: products.amount,
  };
};

export default { getProducts, createdProduct };