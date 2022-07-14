import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import validSchemaUser from '../middlewares/users.middlewares';
import userServices from '../services/user.services';

const userRouter = Router();

userRouter.post(
  '/', 
  validSchemaUser,
  async (req: Request, res: Response): Promise<Response> => {
    const token = await userServices.createdUser(req.body);
    return res.status(StatusCodes.CREATED).json(token);
  },
);

export default userRouter;