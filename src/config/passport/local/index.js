import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import loginCB from './loginCallback';
import registerCB from './registerCallback';

passport.use(
  'local-register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    loginCB
  )
);

passport.use(
  'local-login',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    registerCB
  )
);
