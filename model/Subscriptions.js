const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  phoneNo: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedOn: {
    type: Date,
    default: Date.now,
  },
},{ timestamps: true });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
