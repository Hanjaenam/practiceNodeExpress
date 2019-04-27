import express from 'express';
import {
  getLogIn,
  postLogIn,
  getRegister,
  postRegister,
  getNaverLogin,
  getNaverCallback,
} from 'controllers/authController';
import routes from './routes';

const authRouter = express.Router();
authRouter.get(routes.register, getRegister);
authRouter.post(routes.register, postRegister);
authRouter.get(routes.logIn, getLogIn);
authRouter.post(routes.logIn, postLogIn);
authRouter.get(routes.naver, getNaverLogin);
authRouter.get(routes.naverCallback, getNaverCallback, (req, res) => {
  res.redirect(routes.home);
});

export default authRouter;
