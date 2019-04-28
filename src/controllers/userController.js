import User from 'database/models/user';

export const getEditProfile = async (req, res, next) => {
  const fieldArr = ['facebookId', 'googleId', 'naverId', 'email', 'phoneNumber'];
  const findedField = fieldArr.find(field => req.user[field] !== undefined);
  try {
    const user = await User.findOne({ [findedField]: req.user[findedField] });
    res.render('pages/user/editProfile', { user });
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
  } catch (e) {
    res.redirect('pages/user/editProfile');
  }
  res.redirect('pages/user/editProfile');
};
