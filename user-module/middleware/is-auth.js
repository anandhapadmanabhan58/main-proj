const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.status(404).redirect('/');
  }
};
module.exports = isAuth;
