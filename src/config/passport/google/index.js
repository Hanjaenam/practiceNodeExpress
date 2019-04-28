import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import routes from 'routers/routes';
import googleCallback from './callback';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_SECRET_KEY,
      callbackURL: routes.makeRedirectPath(routes.auth, routes.googleCallback),
    },
    googleCallback
  )
);
