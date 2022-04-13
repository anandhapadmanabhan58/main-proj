const mongoose = require('mongoose');
const cablePlanSchema = mongoose.Schema({
  CplanName: {
    type: String,
    required: true,
  },
  CserviceProvider: {
    type: String,
    required: true,
  },
  CsetTopBox: {
    type: String,
    required: true,
  },
  Cprice: {
    type: String,
    required: true,
  },
  CplanDescription: {
    type: String,
    required: true,
  },
  CplanType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('CablePlan', cablePlanSchema);
