//models

const ServiceProvider = require('../models/ServiceProvider');
const BroadbandPlan = require('../models/BroadbandPlan');
const CablePlan = require('../models/CablePlan');
const cablePayment = require('../models/PaymentCable');
const broadbandPayment = require('../models/PaymentBroadband');

//controllers

const home = (req, res) => {
  res.render('admin/home');
};
const addCablePlans = (req, res) => {
  res.render('admin/addCablePlans');
};
const addBroadbandPlans = (req, res) => {
  res.render('admin/addBroadbandPlans');
};

//add service provider

const addServiceProvider = (req, res) => {
  res.render('admin/addServiceProvider');
};

//about Page

const about = (req, res) => {
  res.render('admin/about');
};

//view service provider

const viewsProvider = async (req, res) => {
  const providers = await ServiceProvider.find((err, doc) => {
    res.render('admin/PlansAndServiceView/viewProvider', {
      sp: doc,
    });
    if (err) {
      console.error(err);
    }
  }).clone();
};

// plan find
const viewbroadband = async (req, res) => {
  const serviceProvider = req.params.serviceProvider;
  try {
    let query = await BroadbandPlan.find({})
      .where('BserviceProvider')
      .equals(serviceProvider);
    res.render('admin/PlansAndServiceView/viewBroadbandPlans', {
      sp: query,
    });
  } catch (err) {
    console.error(err);
  }
};

//view cable plans
const viewCable = async (req, res) => {
  const serviceProvider = req.params.serviceProvider;
  try {
    let query = await CablePlan.find({})
      .where('CserviceProvider')
      .equals(serviceProvider)
      .exec((err, doc) => {
        if (err) throw err;
        res.render('admin/PlansAndServiceView/viewCablePlan', {
          data: doc,
        });
      });
  } catch (err) {
    console.error(err);
  }
};

const payment = (req, res) => {
  res.render('admin/payment');
};

const viewCablePayment = (req, res) => {
  try {
    let query = cablePayment.find({}, (err, doc) => {
      if (err) throw err;
      res.render('admin/PlansAndServiceView/viewCablePayment', {
        data: doc,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

const viewBroadbandPayment = (req, res) => {
  try {
    let query = broadbandPayment.find({}, (err, docs) => {
      if (err) throw err;
      res.render('admin/PlansAndServiceView/viewBroadbandPayment', {
        data: docs,
      });
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  home,
  addCablePlans,
  addBroadbandPlans,
  addServiceProvider,
  about,
  viewsProvider,
  viewbroadband,
  viewCable,
  payment,
  viewCablePayment,
  viewBroadbandPayment,
};
