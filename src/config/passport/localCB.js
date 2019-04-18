import UserModel from 'models/user';

export default (email, password, done) => {
  UserModel.findOne({ email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);
    if (!user.authenticate(password)) return done(null, false);
    return done(null, user);
  });
};
