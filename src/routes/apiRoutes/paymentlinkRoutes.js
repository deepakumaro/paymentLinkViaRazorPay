var express = require('express');
var router = express.Router();

/* controllers imports */

const paymentLinkController = require('../../controllers/paymentLinksController');


/* Payment links Api routes */

router.post('/generate',paymentLinkController.generatePaymentLink);
router.get('/callbackUrl',paymentLinkController.callbackFn);


module.exports = router;