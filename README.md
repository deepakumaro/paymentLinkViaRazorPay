# paymentLinkViaRazorPay
rest apis for creating a payment link, adding data in mongoDB collection and updating it


#mongodb "merchants" sample data 

{
    "_id" : ObjectId("608e6ad524b6342ad9a62caa"),
    "merchantName" : "suyash kumar",
    "userType" : "admin",
    "contactNumber" : "7599420286",
    "businessName" : "plusOne pvt ltd",
    "businessCategory" : []
}

#mongodb "payments" sample data 

{
    "_id" : ObjectId("608eecdcd2a47d6338b0e18c"),
    "amount_paid" : 0,
    "reminders" : [],
    "user_id" : "",
    "accept_partial" : false,
    "amount" : 75000,
    "created_at" : 1619979485,
    "currency" : "INR",
    "customer" : {
        "contact" : "7599420276",
        "email" : "deepakkumarumrao@gmail.com",
        "name" : "sandeep kumar"
    },
    "description" : "Mongo test",
    "expire_by" : 0,
    "expired_at" : 0,
    "first_min_partial_amount" : 0,
    "id" : "plink_H61IVgMG7DXSvQ",
    "notify" : {
        "email" : "true",
        "sms" : "true"
    },
    "reference_id" : "ko7hyi5k414215776214657",
    "reminder_enable" : false,
    "short_url" : "https://rzp.io/i/xuSUrZL0",
    "status" : "created",
    "updated_at" : 1619979485,
    "upi_link" : false,
    "merchantId" : ObjectId("608e6a1524b6342ad9a62c58"),
    "__v" : 0
}
