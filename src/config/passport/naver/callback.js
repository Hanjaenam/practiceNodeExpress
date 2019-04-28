import User from 'database/models/user';

export default async (_, __, profile, done) => {
  // username 가져올 것.
  const {
    _json: { email, id, age, birthday },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.naverId = id;
      return done(null, user);
    }
    const newUser = await User.create({
      email,
      naverId: id,
      birthday: birthday.split('-'),
      age: age.substr(0, 2),
    });
    return done(null, newUser);
  } catch (err) {
    return done(err);
  }
};
