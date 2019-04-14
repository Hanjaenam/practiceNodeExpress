import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import passportLocalCB from 'utils/passport/local';
import UserModel from 'models/user';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    passportLocalCB
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.email);
});

passport.deserializeUser(function(email, done) {
  UserModel.find({ email }, (err, user) => {
    done(err, user);
  });
});
