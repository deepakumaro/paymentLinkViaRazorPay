const mongoose = require('mongoose');
const merchantModel = require("../models/merchantModel");
const paymentModel = require("../models/paymentInfoModel");

exports.getMerchnatPaymentsDetails = async(req,res) => {
    try {
         let {merchantId} = req.query;
         let merchantInfo = await merchantModel.findById(merchantId);
         console.log(merchantInfo);
         if(!merchantInfo || merchantInfo.userType !== "admin"){
            return res.status(401).send("unauthorized access");
         }
         let merchantPaymentsDetails =  await paymentModel.aggregate[(
             { "$group": { "_id": "$merchantId", totalSaleAmount: { $sum:"$amount"} } }
         )]
         return res.status(200).send(merchantPaymentsDetails);
    } catch (error) {
        return res.status(500).send("something went wrong"+error);
    }
}