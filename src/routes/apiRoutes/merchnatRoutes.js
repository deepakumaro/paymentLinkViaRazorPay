var express = require('express');
var router = express.Router();

/* controllers imports */

const merchnatController = require('../../controllers/merchnatController');


/* Payment links Api routes */

router.get('/getPaymentDetails',merchnatController.getMerchnatPaymentsDetails);


module.exports = router;