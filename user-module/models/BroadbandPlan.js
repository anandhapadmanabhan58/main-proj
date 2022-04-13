const mongoose = require('mongoose');
const broadbandPlanSchema = mongoose.Schema({
  BplanName: {
    type: String,
    required: true,
  },
  BserviceProvider: {
    type: String,
    required: true,
  },
  BsetTopBox: {
    type: String,
    required: true,
  },
  Bprice: {
    type: String,
    required: true,
  },
  BplanDescription: {
    type: String,
    required: true,
  },
  BplanType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('BroadbandPlan', broadbandPlanSchema);
