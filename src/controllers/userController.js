import User from 'database/models/user';
import routes from 'routers/routes';

export const getEditProfile = async (req, res, next) => {
  const profilePhotoPath = req.user.profilePhotoUrl
    ? `/dist/user/profile_photo/${req.user.profilePhotoUrl}`
    : '/dist/user/profile_photo/basic.png';
  res.render('pages/user/editProfile', {
    profilePhotoPath,
  });
};

export const postEditProfile = async (req, res, next) => {
  const {
    file: { filename },
  } = req;
  try {
    const user = await User.findOne({ email: req.user.email });
    user.profilePhotoUrl = filename;
    req.user.profilePhotoUrl = filename;
    res.status(200);
  } catch (e) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const getLogOut = (req, res) => {
  if (req.user) {
    req.logout();
  }
  res.redirect(routes.home);
};
