const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema ({
    "amount" :{type: Number, required : true},
    "amount_paid": {type: Number , required: false , default : 0},
    "created_at":{type : Number, requied:true},
    "currency": {type : String , require : true},
    "customer": {
                "contact": {type : String , require : true},
                "email": {type : String , require : true},
                "name": {type : String , require : true}
                },
    "description": {type : String , require : true},
    "expire_by": {type : Number , require : true},
    "expired_at": {type : Number , require : true},
    "first_min_partial_amount": 0,
    "id":{type : String , require : true},
    "notify": {
        "email":  {type : String , require : true},
        "sms":  {type : String , require : true}
    },
    "reference_id": {type : String , require : true},
    "reminder_enable": {type : Boolean , require : true},
    "reminders": {type : Array , require : false,default :[]},
    "short_url":  {type : String , require : true},
    "status":  {type : String , require : true},
    "updated_at": {type : Number, requied:true},
    "upi_link":  {type : Boolean , require : true},
    "user_id":{type : String, requied:false,default:""},
    "accept_partial": {type : Boolean , require : true},
    "merchantId" : { type: Schema.Types.ObjectId, ref: 'merchants' }
});

const payments = mongoose.model('payment', paymentSchema);

module.exports = payments;




// {
//     "accept_partial": false,
//     "amount": 150000,
//     "amount_paid": 0,
//     "cancelled_at": 0,
//     "created_at": 1619943179,
//     "currency": "INR",
//     "customer": {
//         "contact": "7599420276",
//         "email": "deepakkumarumrao@gmail.com",
//         "name": "deepak kumar"
//     },
//     "description": "test",
//     "expire_by": 0,
//     "expired_at": 0,
//     "first_min_partial_amount": 0,
//     "id": "plink_H5qzK9tYTBW7wO",
//     "notes": null,
//     "notify": {
//         "email": true,
//         "sms": true
//     },
//     "payments": null,
//     "reference_id": "ko6wc3lu111221002220600154",
//     "reminder_enable": false,
//     "reminders": [],
//     "short_url": "https://rzp.io/i/kPutOwx",
//     "status": "created",
//     "updated_at": 1619943179,
//     "upi_link": false,
//     "user_id": ""
// }