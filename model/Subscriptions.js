const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
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
