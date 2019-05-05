import passport from 'passport';
import routes from 'routers/routes';
import UserModel from 'database/models/user';

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
// register
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
  successRedirect: routes.makeRedirectPath(routes.auth, routes.checkRequiredData),
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// google
export const getGoogleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });
export const getGoogleCallback = passport.authenticate('google', {
  successRedirect: routes.makeRedirectPath(routes.auth, routes.checkRequiredData),
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// facebook
export const getFacebookLogin = passport.authenticate('facebook');
export const getFacebookCallback = passport.authenticate('facebook', {
  successRedirect: routes.makeRedirectPath(routes.auth, routes.checkRequiredData),
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// check username, email
export const getCheckRequiredData = (req, res) => {
  res.render('pages/auth/checkRequiredData', {
    user: req.user,
  });
};
export const postCheckRequiredData = async (req, res) => {
  const {
    body: { username, email },
  } = req;
  try {
    const user = await UserModel.findById(req.user._id);
    if (req.user.username === undefined) {
      user.username = username;
    }
    if (req.user.email === undefined) {
      user.email = email;
    }
    user.save();
    res.redirect(routes.home);
  } catch (error) {
    res.render('pages/auth/checkRequiredData', { error });
  }
};
