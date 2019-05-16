import path from 'path';
import routes from 'routers/routes';
import multer from 'multer';
import dotenv from 'dotenv';

const TEST_USER = {
  username: 'devMode',
  profilePhotoUrl: undefined,
};

dotenv.config();
const multerProfilePhoto = multer({
  dest: path.resolve(process.env.DIST_PATH, 'user', 'profile_photo'),
});

export default (req, res, next) => {
  res.locals.siteName = 'JaeNam';
  res.locals.routes = routes;
  res.locals.basedir = path.resolve(process.env.NODE_PATH, 'views');
  res.locals.user = req.user || null;
  if (process.env.DEV_MODE === '1') {
    res.locals.user = TEST_USER;
  }
  return next();
};

export const onlyAfterAuth = (req, res, next) => {
  if (process.env.DEV_MODE === '1') {
    req.user = TEST_USER;
    res.locals.user = req.user;
    return next();
  }
  if (req.user) {
    return next();
  }
  return res.redirect(routes.home);
};

export const uploadProfilePhoto = multerProfilePhoto.single('profilePhotoUrl');

export const checkRequiredData = (req, res, next) => {
  if (req.user.username === undefined || req.user.email === undefined) {
    return next();
  }
  res.redirect(routes.home);
};
