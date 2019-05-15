import User from 'database/models/user';
import routes from 'routers/routes';
import mongoose from 'mongoose';

export const getLogOut = (req, res) => {
  if (req.user) {
    req.logout();
  }
  res.redirect(routes.home);
};

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
    // 저장할 것!
    user.save();
    res.status(200);
  } catch (e) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postEditUserName = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.username = username;
    req.user.username = username;
    user.save();
    res.status(200);
  } catch (e) {
    res.status(400);
  } finally {
    res.end();
  }
};

export const postEditPassword = async (req, res) => {
  const { prePassword, changePassword } = req.body;
  try {
    const user = await User.findById(req.user._id);
    if (user.authenticate(prePassword)) {
      user.password = changePassword;
      user.save();
      res.status(200);
    } else {
      res.status(403).send('비밀번호를 확인해주세요');
    }
    res.status(200);
  } catch (e) {
    if (e instanceof mongoose.Error.ValidationError) {
      res.status(400).send({ regex: '최소 8~15글자, 1개 이상의 특수문자 필요' });
    } else {
      res.status(400);
    }
  } finally {
    res.end();
  }
};
