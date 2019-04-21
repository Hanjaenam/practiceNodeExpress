import express from 'express';
import { getLogIn, postLogIn, getRegister, postRegister } from 'controllers/authController';
import routes from './routes';

const authRouter = express.Router();
authRouter.get(routes.register, getRegister);
authRouter.post(routes.register, postRegister);
authRouter.get(routes.logIn, getLogIn);
authRouter.post(routes.logIn, postLogIn);

export default authRouter;
