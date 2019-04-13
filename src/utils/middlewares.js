import path from 'path';
import routes from '../routers/routes';

export default (req, res, next) => {
  res.locals.siteName = 'JaeNam';
  res.locals.routes = routes;
  res.locals.basedir = path.resolve(__dirname, '..', 'views');
  return next();
};
