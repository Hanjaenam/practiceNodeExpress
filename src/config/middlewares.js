import path from 'path';
import routes from 'routers/routes';

export default (req, res, next) => {
  res.locals.siteName = 'JaeNam';
  res.locals.routes = routes;
  res.locals.basedir = path.resolve(__dirname, '..', 'views');
  res.locals.user = req.user || process.env.TEST_SCSS ? 'dev' : null;
  return next();
};

export const onlyAfterAuth = (req, res, next) => {
  if (process.env.TEST_SCSS) {
    return next();
  }
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
