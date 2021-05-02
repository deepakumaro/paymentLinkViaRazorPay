const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const merchantSchema = new Schema({
    "merchantName" : {type:String,require:true},
    "userType" : {type:String,require:true},
    "contactNumber" :{type:String,require:true},
    "businessName" : {type:String,require:true},
    "businessCategory" :{type:Array,require:true}
})

const merchantModel = mongoose.model('merchants', merchantSchema, 'merchants');

module.exports = merchantModel;