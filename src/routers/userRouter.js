import express from 'express';
import { onlyAfterAuth } from 'utils/middlewares';
import { getEditProfile } from 'controllers/userController';
import routes from './routes';

const userRouter = express.Router();
userRouter.get(routes.editProfile, onlyAfterAuth, getEditProfile);

export default userRouter;
