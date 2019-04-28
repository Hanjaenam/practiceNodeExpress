import User from 'database/models/user';

export default async (_, __, profile, done) => {
  const { id, displayName } = profile;
  try {
    const user = await User.findOne({ facebookId: id });
    if (user) {
      return done(null, user);
    }
    const newUser = await User.create({
      username: displayName,
      facebookId: id,
    });
    return done(null, newUser);
  } catch (err) {
    return done(err);
  }
};
