import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import UserModel from 'database/models/user';
import mongoose from 'mongoose';

const cb = (req, email, password, done) => {
  UserModel.findOne({ email }, async (err, isExist) => {
    if (err) return done(err);
    if (isExist) {
      return done(
        null,
        false,
        req.flash('message', 'this email already exists'),
        req.flash('errorType', 'email')
      );
    }
    const user = await new UserModel({ email, password });
    try {
      user.save();
    } catch (e) {
      if (e instanceof mongoose.Error.ValidationError) {
        if (e.errors.email) {
          return done(
            null,
            false,
            req.flash('message', e.errors.email.message),
            req.flash('errorType', 'email')
          );
        }
        if (e.errors.hashedPassword) {
          return done(
            null,
            false,
            req.flash('message', e.errors.hashedPassword.message),
            req.flash('errorType', 'password')
          );
        }
      }
      return done(e);
    }
    return done(null, user);
  });
};

passport.use(
  'local-register',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    cb
  )
);
