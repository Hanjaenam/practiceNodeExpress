import express from 'express';
import { onlyAfterAuth, uploadProfilePhoto } from 'middlewares';
import { getEditProfile, postEditProfile } from 'controllers/userController';
import routes from './routes';

const userRouter = express.Router();
userRouter.get(routes.editProfile, onlyAfterAuth, getEditProfile);
userRouter.post(routes.editProfile, onlyAfterAuth, uploadProfilePhoto, postEditProfile);

export default userRouter;
