import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import routes from 'routers/routes';
import facebookCallback from './callback';

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.OAUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.OAUTH_FACEBOOK_SECRET_KEY,
      callbackURL: routes.makeRedirectPath(routes.auth, routes.facebookCallback),
    },
    facebookCallback
  )
);
