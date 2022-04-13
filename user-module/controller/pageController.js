//model import

const ServiceProvider = require('../models/ServiceProvider');
const cablePlanSchema = require('../models/CablePlan');

//login controller
const login = (req, res) => {
  res.render('login');
};

//signup controller

const signup = (req, res) => {
  res.render('signup');
};

//home controller

const home = (req, res) => {
  res.render('home');
};
//Log out

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect('/');
  });
};

//list services-news-cable-broadband

const services = (req, res) => {
  res.render('services');
};

//list cable-broadband providers

const cableProviders = async (req, res) => {
  const serviceProviders = await ServiceProvider.find();
  res.render('cableProviders', {
    data: serviceProviders,
  });
};
//list news-cable-plans

const cablePlans = async (req, res) => {
  try {
    const provider = req.params.provider;
    let query = cablePlanSchema
      .find({})
      .where('CserviceProvider')
      .equals(provider);
    res.render('cablePlan', {
      data: query,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

module.exports = {
  login,
  signup,
  home,
  logout,
  services,
  cableProviders,
  cablePlans,
};
