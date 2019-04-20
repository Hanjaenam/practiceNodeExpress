import path from 'path';
import routes from 'routers/routes';
import multer from 'multer';

const multerProfilePhoto = multer({ dest: 'src/dist/user/profile_photo' });

export default (req, res, next) => {
  res.locals.siteName = 'JaeNam';
  res.locals.routes = routes;
  res.locals.basedir = path.resolve(__dirname, 'views');
  res.locals.user = req.user || process.env.TEST_SCSS ? 'dev' : null;
  return next();
};

export const onlyAfterAuth = (req, res, next) => {
  if (process.env.TEST_SCSS) {
    return next();
  }
  if (req.user) {
    return next();
  }
  return res.redirect(routes.home);
};

export const uploadProfilePhoto = multerProfilePhoto.single('profilePhotoUrl');
