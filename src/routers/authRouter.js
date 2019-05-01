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
import routes from './routes';

const authRouter = express.Router();
authRouter.get(routes.register, getRegister);
authRouter.post(routes.register, postRegister);
authRouter.get(routes.logIn, getLogIn);
authRouter.post(routes.logIn, postLogIn);

authRouter.post(routes.checkRequiredData, postCheckRequiredData);

// OAUTH PASSPORT
// naver
authRouter.get(routes.naver, getNaverLogin);
authRouter.get(routes.naverCallback, getNaverCallback, getCheckRequiredData);
// google
authRouter.get(routes.google, getGoogleLogin);
authRouter.get(routes.googleCallback, getGoogleCallback, getCheckRequiredData);
// facebook
authRouter.get(routes.facebook, getFacebookLogin);
authRouter.get(routes.facebookCallback, getFacebookCallback, getCheckRequiredData);
export default authRouter;
