import express from 'express';
import { register } from 'controllers/authController';
import routes from './routes';

const authRouter = express.Router();
authRouter.get(routes.register, register);

export default authRouter;
