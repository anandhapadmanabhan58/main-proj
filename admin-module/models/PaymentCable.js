const mongoose = require('mongoose');
const paymentCableSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  CplanName: {
    type: String,
    required: true,
  },
  Cservice: {
    type: String,
    required: true,
  },
  CplanDesc: {
    type: String,
    required: true,
  },
  Cprice: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('PaymentCable', paymentCableSchema);
