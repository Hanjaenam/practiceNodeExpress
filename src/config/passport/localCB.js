import UserModel from 'models/user';

export default (req, email, password, done) => {
  UserModel.findOne({ email }, function(err, user) {
    if (err) return done(err);
    if (!user)
      return done(
        null,
        false,
        req.flash('message', 'Incorrect email'),
        req.flash('errorType', 'email')
      );
    if (!user.authenticate(password))
      return done(
        null,
        false,
        req.flash('message', 'Incorrect password'),
        req.flash('errorType', 'password')
      );
    return done(null, user, req.flash('message', 'welcome!'));
  });
};
