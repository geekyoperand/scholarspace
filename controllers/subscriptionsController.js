const subscriptionService = require('../services/subscriptionServices')

// Controller function for creating a new subscription
async function createSubscription(req, res) {
  console.log(req.body)
  const { phone, name, email } = req.body;

  try {
    const result = await subscriptionService.createSubscription(phone, req.ip,  name, email);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
async function updateSubscription(req, res) {
  res.status(200).json({});
}

module.exports = {
  createSubscription,
  updateSubscription
};