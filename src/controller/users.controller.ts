import { Request, Response, Router } from 'express';
import validSchemaUser from '../middlewares/users.middlewares';
import userServices from '../services/user.services';

const userRouter = Router();

userRouter.post(
  '/', 
  validSchemaUser,
  async (req: Request, res: Response): Promise<Response> => {
    const token = await userServices.createdUser(req.body);
    return res.status(201).json(token);
  },
);

export default userRouter;