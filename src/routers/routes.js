const HOME = '/';
// AUTH
const AUTH = '/auth';
const LOG_IN = '/logIn';
const REGISTER = '/register';
const NAVER = '/naver';
const GOOGLE = '/google';
const FACEBOOK = '/facebook';
const NAVER_CALLBACK = '/naver/callback';
const GOOGLE_CALLBACK = '/google/callback';
const FACEBOOK_CALLBACK = '/facebook/callback';
// user
const USER = '/user';
const EDIT_PROFILE = '/editProfile';

const routes = {
  home: HOME,
  // auth
  auth: AUTH,
  logIn: LOG_IN,
  register: REGISTER,
  naver: NAVER,
  google: GOOGLE,
  facebook: FACEBOOK,
  naverCallback: NAVER_CALLBACK,
  googleCallback: GOOGLE_CALLBACK,
  facebookCallback: FACEBOOK_CALLBACK,
  // user
  user: USER,
  editProfile: EDIT_PROFILE,
  // util
  makeRedirectPath: (...paths) => {
    let fullPath = '';
    paths.forEach(path => {
      fullPath += path;
    });
    return fullPath;
  },
};

export default routes;
