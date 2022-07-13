import { Request, Response, Router } from 'express';
import validateSchemaLogin from '../middlewares/login.middlewares';
import login from '../services/login.services';

const loginRouter = Router();

loginRouter.post(
  '/', 
  validateSchemaLogin,
  async (req: Request, res: Response): Promise<Response> => {
    const token = await login(req.body);
    return res.status(200).json(token);
  },
);

export default loginRouter;