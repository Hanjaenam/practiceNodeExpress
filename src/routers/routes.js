const HOME = '/';

const AUTH = '/auth';
const LOG_IN = '/logIn';
const REGISTER = '/register';

const routes = {
  home: HOME,
  auth: AUTH,
  logIn: LOG_IN,
  register: REGISTER,
  makeRedirectPath: (...paths) => {
    let fullPath = '';
    paths.forEach(path => {
      fullPath += path;
    });
    return fullPath;
  },
};

export default routes;
