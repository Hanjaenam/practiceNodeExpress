import User from 'database/models/user';

export const getEditProfile = async (req, res, next) => {
  try {
    const loggedUser = await User.findOne({ email: req.user.email });
    res.render('pages/user/editProfile', { loggedUser });
  } catch (e) {
    // error page 만들 것.
    res.redirect('pages/user/editProfile');
  }
};

export const postEditProfile = async (req, res, next) => {
  const { filename } = req.file;
  try {
    const loggedUser = await User.findOne({ email: req.user.email });
    loggedUser.profilePhotoUrl = filename;
    loggedUser.save();
    res.render('pages/user/editProfile', { loggedUser });
  } catch (e) {
    res.redirect('pages/user/editProfile');
  }
};
