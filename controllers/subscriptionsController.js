const subscriptionService = require('../services/subscriptionServices')

// Controller function for creating a new subscription
async function createSubscription(req, res) {
  const { phoneNo, name, email, state, country } = req.body;

  try {
    const result = await subscriptionService.createSubscription(phoneNo, req.ip,  name, email, state, country);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createSubscription,
};