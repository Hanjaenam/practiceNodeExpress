// import passport from 'passport';
import passport from 'passport';
import routes from 'routers/routes';

export const getLogIn = (req, res) => {
  res.render('pages/auth/logIn', {
    message: req.flash('message')[0],
    errorType: req.flash('errorType')[0],
  });
};
export const postLogIn = passport.authenticate('local-login', {
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
  successRedirect: routes.home,
  failureFlash: true,
});
export const getRegister = (req, res) => {
  res.render('pages/auth/register', {
    message: req.flash('message')[0],
    errorType: req.flash('errorType')[0],
  });
};
export const postRegister = passport.authenticate('local-register', {
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.register),
  successRedirect: routes.home,
  failureFlash: true,
});
// PASSPORT OAUTH
// naver
export const getNaverLogin = passport.authenticate('naver');
export const getNaverCallback = passport.authenticate('naver', {
  successRedirect: routes.home,
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// google
export const getGoogleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });
export const getGoogleCallback = passport.authenticate('google', {
  successRedirect: routes.home,
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// facebook
export const getFacebookLogin = passport.authenticate('facebook');
export const getFacebookCallback = passport.authenticate('facebook', {
  successRedirect: routes.home,
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
