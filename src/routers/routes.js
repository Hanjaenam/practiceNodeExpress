const HOME = '/';
// AUTH
const AUTH = '/auth';
const LOG_IN = '/logIn';
const REGISTER = '/register';
const NAVER = '/naver';
const GITHUB = '/github';
const GOOGLE = '/google';
const NAVER_CALLBACK = '/naver/callback';
const GITHUB_CALLBACK = '/github/callback';
const GOOGLE_CALLBACK = '/google/callback';
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
  github: GITHUB,
  google: GOOGLE,
  naverCallback: NAVER_CALLBACK,
  githubCallback: GITHUB_CALLBACK,
  googleCallback: GOOGLE_CALLBACK,
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
