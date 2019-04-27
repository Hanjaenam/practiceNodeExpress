import User from 'database/models/user';

export default async (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  try {
    const {
      _json: { email, nickname, id },
    } = profile;
    const user = await User.findOne({ naverId: id });
    if (!user) {
      await User.create({
        username: nickname,
        email,
        naverId: id,
      });
    }
    done(null, user);
  } catch (err) {
    done(err);
  }
};
