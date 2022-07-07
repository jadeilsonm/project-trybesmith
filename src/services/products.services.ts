import IProducts from '../interfaces/products.interface';
import productsModel from '../models/products.modell';

const getProducts = (): Promise<IProducts[]> => productsModel.getProducts();

export default { getProducts };