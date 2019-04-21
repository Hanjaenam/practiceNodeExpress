// import passport from 'passport';
import passport from 'passport';
import routes from 'routers/routes';

export const getRegister = (req, res, next) => {
  res.render('pages/auth/register', {
    message: req.flash('message')[0],
    errorType: req.flash('errorType')[0],
  });
};
// export const postRegister = async (req, res, next) => {
//   const {
//     body: { email, password },
//   } = req;
//   try {
//     const user = await User({ email, password });
//     user.save();
//     res.redirect(routes.home);
//   } catch (e) {
//     if (e instanceof mongoose.Error.ValidationError) {
//       res.redirect(routes.makeRedirectPath(routes.auth, routes.register), {});
//     }
//   }
// };
export const postRegister = passport.authenticate('local-register', {
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.register),
  successRedirect: routes.home,
  failureFlash: true,
  successFlash: true,
});
export const getLogIn = (req, res, next) => {
  res.render('pages/auth/logIn', {
    message: req.flash('message')[0],
    errorType: req.flash('errorType')[0],
  });
};
export const postLogIn = passport.authenticate('local-login', {
  failureRedirect: routes.makeRedirectPath(routes.auth, routes.logIn),
  successRedirect: routes.home,
  failureFlash: true,
  successFlash: true,
});
