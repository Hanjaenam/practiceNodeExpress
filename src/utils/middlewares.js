import routes from '../routers/routes';

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'JaeNam';
  res.locals.routes = routes;

  return next();
};
