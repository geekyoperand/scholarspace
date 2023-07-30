const Subscription = require('../model/Subscriptions');

// Service function to create a new subscription
async function createSubscription(phone, ipAddress, name, email) {
  try {
     // Validate email format
    //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //  if (!emailRegex.test(email)) {
    //    throw new Error('Invalid email format');
    //  }
 
     // Check if the email already exists in the database
     const existingSubscription = await Subscription.findOne({ email });
     if (existingSubscription) {
       throw new Error('Email already subscribed');
     }
     console.log(phone, ipAddress, name, email)
    const newSubscription = new Subscription({
      phone,
      ipAddress,
      name, 
      email
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