// import passport from 'passport';
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
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// google
export const getGoogleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });
export const getGoogleCallback = passport.authenticate('google', {
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
});
// facebook
export const getFacebookLogin = passport.authenticate('facebook');
export const getFacebookCallback = passport.authenticate('facebook', {
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
  const usedId = ['facebookId', 'naverId', 'googleId'].find(id => {
    if (req.user[id] !== undefined) return id;
  });
  try {
    const user = await UserModel.findById(req.user._id);
    user.username = username;
    if (usedId === 'facebookId') {
      user.email = email;
    }
    user.save();
    res.redirect(routes.home);
  } catch (error) {
    console.log(error);
    res.render('pages/auth/checkRequiredData', { error });
  }
};
