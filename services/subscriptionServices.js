const Subscription = require('../model/Subscriptions');

// Service function to create a new subscription
async function createSubscription(phoneNo, ipAddress) {
  try {
     // Validate email format
    //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //  if (!emailRegex.test(email)) {
    //    throw new Error('Invalid email format');
    //  }
 
     // Check if the email already exists in the database
     const existingSubscription = await Subscription.findOne({ phoneNo });
     if (existingSubscription) {
       throw new Error('Email already subscribed');
     }
     
    const newSubscription = new Subscription({
      phoneNo,
      ipAddress,
      // name, 
      // email, 
      // state, 
      // country
    });

    const createdSubscription = await newSubscription.save();
    return createdSubscription;
  } catch (error) {
    throw new Error('Error creating subscription: ' + error.message);
  }
}

module.exports = {
  createSubscription,
};