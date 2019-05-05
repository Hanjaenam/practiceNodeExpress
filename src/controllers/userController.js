import User from 'database/models/user';
import routes from 'routers/routes';

export const getEditProfile = async (req, res, next) => {
  const profilePhotoPath = req.user.profilePhotoUrl
    ? `/dist/user/profile_photo${req.user.profilePhotoUrl}`
    : '/dist/user/profile_photo/basic.png';
  res.render('pages/user/editProfile', {
    profilePhotoPath,
  });
};

export const postEditProfile = async (req, res, next) => {
  const { file } = req;
  try {
    const loggedUser = await User.findOne({ email: req.user.email });
    loggedUser.profilePhotoUrl = file.filename;
    loggedUser.save();
    res.render('pages/user/editProfile', { loggedUser });
  } catch (e) {
    res.redirect(routes.makeRedirectPath(routes.user, routes.editProfile));
  }
};

export const getLogOut = (req, res) => {
  if (req.user) {
    req.logout();
  }
  res.redirect(routes.home);
};
