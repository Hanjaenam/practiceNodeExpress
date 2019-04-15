const HOME = '/';
// AUTH
const AUTH = '/auth';
const LOG_IN = '/logIn';
const REGISTER = '/register';
// user
const USER = '/user';
const EDIT_PROFILE = '/editProfile';

const routes = {
  home: HOME,
  auth: AUTH,
  logIn: LOG_IN,
  register: REGISTER,
  user: USER,
  editProfile: EDIT_PROFILE,
  makeRedirectPath: (...paths) => {
    let fullPath = '';
    paths.forEach(path => {
      fullPath += path;
    });
    return fullPath;
  },
};

export default routes;
