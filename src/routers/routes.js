const HOME = '/';
// AUTH
const AUTH = '/auth';
const LOG_IN = '/logIn';
const REGISTER = '/register';
const CHECK_REQUIRED_DATA = '/checkData';
const NAVER = '/naver';
const GOOGLE = '/google';
const FACEBOOK = '/facebook';
const NAVER_CALLBACK = '/naver/callback';
const GOOGLE_CALLBACK = '/google/callback';
const FACEBOOK_CALLBACK = '/facebook/callback';
// user
const USER = '/user';
const EDIT_PROFILE = '/editProfile';
const EDIT_USERNAME = '/editUsername';
const EDIT_PASSWORD = '/editPassword';
const LOG_OUT = '/logout';

const routes = {
  home: HOME,
  // auth
  auth: AUTH,
  logIn: LOG_IN,
  register: REGISTER,
  checkRequiredData: CHECK_REQUIRED_DATA,
  naver: NAVER,
  google: GOOGLE,
  facebook: FACEBOOK,
  naverCallback: NAVER_CALLBACK,
  googleCallback: GOOGLE_CALLBACK,
  facebookCallback: FACEBOOK_CALLBACK,
  // user
  user: USER,
  editProfile: EDIT_PROFILE,
  editUsername: EDIT_USERNAME,
  editPassword: EDIT_PASSWORD,
  logOut: LOG_OUT,
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
