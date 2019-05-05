import express from 'express';
import {
  getLogIn,
  getRegister,
  getNaverLogin,
  getNaverCallback,
  getGoogleLogin,
  getGoogleCallback,
  getFacebookLogin,
  getFacebookCallback,
  getCheckRequiredData,
  postRegister,
  postLogIn,
  postCheckRequiredData,
} from 'controllers/authController';
import { checkRequiredData } from 'middlewares/locals';
import routes from './routes';

const authRouter = express.Router();
authRouter.get(routes.register, getRegister);
authRouter.post(routes.register, postRegister);
authRouter.get(routes.logIn, getLogIn);
authRouter.post(routes.logIn, postLogIn);

authRouter.get(routes.checkRequiredData, checkRequiredData, getCheckRequiredData);
authRouter.post(routes.checkRequiredData, postCheckRequiredData);

// OAUTH PASSPORT
// naver
authRouter.get(routes.naver, getNaverLogin);
authRouter.get(routes.naverCallback, getNaverCallback);
// google
authRouter.get(routes.google, getGoogleLogin);
authRouter.get(routes.googleCallback, getGoogleCallback);
// facebook
authRouter.get(routes.facebook, getFacebookLogin);
authRouter.get(routes.facebookCallback, getFacebookCallback);

export default authRouter;
