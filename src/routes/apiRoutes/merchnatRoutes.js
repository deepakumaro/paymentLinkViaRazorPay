var express = require('express');
var router = express.Router();

/* controllers imports */

const merchnatController = require('../../controllers/merchnatController');


/* Payment links Api routes */

router.post('/getPaymentDetails',merchnatController.getMerchnatPaymentsDetails);


module.exports = router;