import UserModel from 'models/user';

export default (email, password, done) => {
  UserModel.findByEmail(email, (err, results) => {
    if (err) {
      return done(err);
    }
    if (!results) {
      return done(null, false, { message: 'Incorrect email' });
    }
    const user = new UserModel({ email });
    const authenticated = user.authenticate(
      password,
      results[0].salt,
      results[0].hashed_password
    );
    if (!authenticated) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
};
