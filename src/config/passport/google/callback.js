import User from 'database/models/user';

export default async (_, __, profile, done) => {
  const {
    id,
    _json: { email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.googleId = id;
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      googleId: id,
    });
    return done(null, newUser);
  } catch (err) {
    return done(err);
  }
};
