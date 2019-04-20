import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import passportLocalCB from 'config/passport/localCB';
import UserModel from 'models/user';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    passportLocalCB
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  UserModel.find({ email }, function(err, user) {
    done(err, user);
  });
});
