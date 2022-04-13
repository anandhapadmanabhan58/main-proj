const mongoose = require('mongoose');
const paymentBroadbandSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  BplanName: {
    type: String,
    required: true,
  },
  Bservice: {
    type: String,
    required: true,
  },
  BplanDesc: {
    type: String,
    required: true,
  },
  Bprice: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('PaymentBroadband', paymentBroadbandSchema);
