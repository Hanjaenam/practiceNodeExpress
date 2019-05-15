import express from 'express';
import { onlyAfterAuth, uploadProfilePhoto } from 'middlewares/locals';
import {
  getEditProfile,
  postEditProfile,
  postEditUserName,
  postEditPassword,
  getLogOut,
} from 'controllers/userController';
import routes from './routes';

const userRouter = express.Router();
userRouter.get(routes.editProfile, onlyAfterAuth, getEditProfile);
userRouter.post(routes.editProfile, onlyAfterAuth, uploadProfilePhoto, postEditProfile);
userRouter.post(routes.editUsername, onlyAfterAuth, postEditUserName);
userRouter.post(routes.editPassword, onlyAfterAuth, postEditPassword);
userRouter.get(routes.logOut, getLogOut);

export default userRouter;
