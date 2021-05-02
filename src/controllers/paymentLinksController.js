/* imports */
const commonUtils = require('../commonUtility/curlRequests');
const commonUtilsFunction = require('../commonUtility/commonUtils');
const merchantModel = require('../models/merchantModel');
const paymentsModel = require('../models/paymentInfoModel');


/* controller for payment link generation*/

exports.generatePaymentLink = async(req,res) => {
    try {
        let {amount,description,customerName,customerContact,customerEmail,merchantId} = req.body;
        const merchant = await merchantModel.findById(merchantId);
        if(!merchant){
          return res.status(400).send("can not initiate payment for this merchant");
        }
        let refId = commonUtilsFunction.createUniqueId(8);
        if(refId.status == "1"){
            return res.status(500).send(refId.error);
        }
        let data = {
            "amount": amount * 100,
            "accept_partial": false,
            "expire_by": parseInt(process.env.paymentLinkExpiresIn)*60,
           "reference_id": refId.refId,
            "description": description,
            "customer": {
              "name": customerName,
              "contact": customerContact,
              "email": customerEmail
            },
            "notify": {
              "sms": true,
              "email": true
            },
            "callback_url": process.env.callbackUrl,
            "callback_method": "get"
          }
          console.log(data.expire_by);
          let authData = {userName:process.env.apikey,password:process.env.apiPassword};
          let auth = commonUtils.getAuthHeadersForPostCurl("basic Auth",authData);
          if(auth.status == "1"){
              return res.status(500).send(auth.error)
          }
          let headersForCurlRequest = {
            hostname: process.env.rozorPayApiHost,
            path: process.env.generateLinkPath,
            method: 'POST',
            headers: {
                'Authorization' : auth.auth,
                'Content-Type': 'application/json',
            }
          }
        let response = await commonUtils.postCurl(headersForCurlRequest,JSON.stringify(data));
        let paymentStatus = await savePayments(response,merchant.id);
        if(paymentStatus == "1"){
          return res.status(400).send(paymentStatus.error)
        }
        return res.status(200).send(paymentStatus.paymentsLink);
    } catch (error) {
        return res.status(500).send("something went wrong"+error);
    }
}

const savePayments = async(data,merchantId) => {
  try {
    let paymentInfo = new paymentsModel({
      "accept_partial": data.accept_partial,
      "amount": data.amount,
      "amount_paid": data.amount_paid,
      "cancelled_at": data.cancelled_at,
      "created_at": data.created_at,
      "currency": data.currency,
      "customer": data.customer,
      "description": data.description,
      "expire_by": data.expired_at,
      "expired_at": data.expired_at,
      "first_min_partial_amount": data.first_min_partial_amount,
      "id": data.id,
      "notify": data.notify,
      "reference_id": data.reference_id,
      "reminder_enable": data.reminder_enable,
      "reminders": data.reminders,
      "short_url": data.short_url,
      "status": data.status,
      "updated_at": data.updated_at,
      "upi_link": data.upi_link,
      "user_id": data.user_id,
      "merchantId": merchantId,
    })
    let payments = await paymentInfo.save();
    return {"status":"0","paymentsLink":payments.short_url};
  } catch (error) {
    return {"status":"1","error":"something went wrong"+error};
  }
}


/*callback method after post payment */

exports.callbackFn = (req,res)=>{
  try {
    console.log(">>>>>> req.query",req.query);
  } catch (error) {
    console.log(">>>>>>>>",error);
  }
}