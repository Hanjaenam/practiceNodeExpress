import User from 'models/user';

export const getEditProfile = (req, res, next) => {
  res.render('pages/user/editProfile');
};

export const postEditProfile = async (req, res, next) => {
  const { filename } = req.file;
  try {
    const loggedUser = await User.find({ email: req.user.email });
    loggedUser.profilePhotoUrl = filename;
    loggedUser.save();
  } catch (e) {
    res.redirect('pages/user/editProfile');
  }
  res.redirect('pages/user/editProfile');
};
