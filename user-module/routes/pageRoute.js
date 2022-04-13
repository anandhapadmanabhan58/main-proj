const express = require('express');
const router = express.Router();
const {
  login,
  signup,
  home,
  logout,
  services,
  cableProviders,
  cablePlans,
} = require('../controller/pageController');
const isAuth = require('../middleware/is-auth');

router.get('/', login);
router.get('/signup', signup);
router.get('/home', isAuth, home);
router.get('/logout', logout);
router.get('/service', services);
router.get('/cableProviders', cableProviders);
router.get('/cablePlans/:provider', cablePlans);

module.exports = router;
