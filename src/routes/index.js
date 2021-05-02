var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'RozerPay Payment links' });
});

/* all Api routes imports */
const paymentLink = require('./apiRoutes/paymentlinkRoutes');
const merchantPaymentDetails = require('./apiRoutes/merchnatRoutes');

/*midllerware for Api */
router.use('/paymentLink',paymentLink)
router.use('/merchnat',merchantPaymentDetails)

module.exports = router;
