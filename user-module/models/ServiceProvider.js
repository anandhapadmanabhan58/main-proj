const mongoose = require('mongoose');
const serviceProviderSchema = mongoose.Schema({
  serviceProvider: {
    type: String,
    required: true,
    unique: true,
  },
  availableService: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('ServiceProvider', serviceProviderSchema);
