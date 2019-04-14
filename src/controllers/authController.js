// import passport from 'passport';
import User from 'models/user';
import passport from 'passport';
import routes from 'routers/routes';

export const getRegister = (req, res, next) => {
  res.render('pages/auth/register');
};
export const postRegister = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;
  try {
    const user = await User({ email, password });
    user.save();
    res.redirect(routes.home);
  } catch (e) {
    res.redirect(routes.makeRedirectPath(routes.auth, routes.logIn));
  }
};
export const getLogIn = (req, res, next) => {
  res.render('pages/auth/logIn');
};
export const postLogIn = passport.authenticate('local', {
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.register),
  successRedirect: routes.home,
});
