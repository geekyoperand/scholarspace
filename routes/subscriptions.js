const express = require('express');
const router = express.Router();
const subscriptionsController = require('../controllers/subscriptionsController.js');

router.post('/subscriptions', subscriptionsController.createSubscription);

module.exports = router;