//dataBase models
const ServiceProvider = require('../models/ServiceProvider');
const CablePlan = require('../models/CablePlan');
const BroadbandPlan = require('../models/BroadbandPlan');

//cable plan controller

const cablePlan = async (req, res) => {
  const cablePlanDetails = {
    CplanName: req.body.CplanName,
    CserviceProvider: req.body.CserviceProvider,
    CsetTopBox: req.body.CsetTopBox,
    Cprice: req.body.Cprice,
    CplanDescription: req.body.CplanDescription,
    CplanType: req.body.CplanType,
  };
  try {
    const serviceProvider = req.body.CserviceProvider;

    const findProvider = await ServiceProvider.findOne({ serviceProvider });
    if (findProvider) {
      const cable = await CablePlan.create(cablePlanDetails);
      res.status(201).json({ status: 'success', data: cable });
    } else {
      res.status(200).json({ status: 'fail', data: findProvider });
    }
  } catch (err) {
    console.error(err);
  }
};

//broadband plan controller

const broadbandPlan = async (req, res) => {
  const broadbandPlanDetails = {
    BplanName: req.body.BplanName,
    BserviceProvider: req.body.BserviceProvider,
    BsetTopBox: req.body.BsetTopBox,
    Bprice: req.body.Bprice,
    BplanDescription: req.body.BplanDescription,
    BplanType: req.body.BplanType,
  };
  try {
    const provider = req.body.BserviceProvider;
    const findBprovider = await ServiceProvider.findOne({ provider });
    if (!findBprovider) {
      res.status(200).json({ status: 'fail', data: findBprovider });
    } else {
      const broadband = await BroadbandPlan.create(broadbandPlanDetails);
      res.status(201).json({ status: 'success', data: broadband });
    }
  } catch (err) {
    console.error(err);
  }
};

//Service Provider Controller
const serviceProvider = async (req, res) => {
  const serviceDetails = {
    serviceProvider: req.body.serviceProvider,
    availableService: req.body.availableService,
  };
  try {
    const service = ServiceProvider.create(serviceDetails);
    res.status(201).json({ status: 'success', data: service });
  } catch (err) {
    console.error(err);
  }
};

//delete broadband plan

const deleteBroadband = async (req, res) => {
  const delId = req.params.id;
  const deletion = await BroadbandPlan.findByIdAndRemove(delId, (err) => {
    if (!err) {
      res.redirect('/');
    } else {
      res.send(err);
    }
  }).clone();
};

//delete cable
const deleteCable = async (req, res) => {
  const deId = req.params.id;
  const deletion = await CablePlan.findByIdAndRemove(deId, (err) => {
    if (!err) {
      res.redirect('/');
    } else {
      res.send(err);
    }
  }).clone();
};
module.exports = {
  cablePlan,
  serviceProvider,
  broadbandPlan,
  deleteBroadband,
  deleteCable,
};
