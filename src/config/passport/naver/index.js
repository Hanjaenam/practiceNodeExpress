import { Strategy as NaverStrategy } from 'passport-naver';
import passport from 'passport';
import routes from 'routers/routes';
import naverCallback from './callback';

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.OAUTH_NAVER_CLIENT_ID,
      clientSecret: process.env.OAUTH_NAVER_CLIENT_SECRET_KEY,
      callbackURL: routes.makeRedirectPath(routes.auth, routes.naverCallback),
    },
    naverCallback
  )
);
