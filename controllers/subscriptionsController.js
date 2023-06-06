const subscriptionService = require('../services/subscriptionServices')

// Controller function for creating a new subscription
async function createSubscription(req, res) {
  const { phoneNo } = req.body;

  try {
    const result = await subscriptionService.createSubscription(phoneNo, req.ip);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  createSubscription,
};