const express = require('express');
const router = express.Router();
const {
  serviceProvider,
  cablePlan,
  broadbandPlan,
  deleteBroadband,
  deleteCable,
} = require('../controller/apiController');

//routes-API

router.post('/serviceProvider', serviceProvider);
router.post('/addCablePlan', cablePlan);
router.post('/addBroadbandPlan', broadbandPlan);
router.post('/deleteBroaband/:id', deleteBroadband);
router.post('/deleteCable/:id', deleteCable);
//exporting

module.exports = router;
