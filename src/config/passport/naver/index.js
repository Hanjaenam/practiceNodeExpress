import { Strategy as NaverStrategy } from 'passport-naver';
import passport from 'passport';
import routes from 'routers/routes';
import naverCallback from './callback';

passport.use(
  new NaverStrategy(
    {
      clientID: process.env.OAUTH_NAVER_CLIENT_ID,
      clientSecret: process.env.OAUTH_NAVER_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.makeRedirectPath(
        routes.auth,
        routes.naverCallback
      )}`,
      svcType: 0,
      authType: 'reauthenticate',
    },
    naverCallback
  )
);
