const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/paymentApp';
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
mongoose.connect(url, {useNewUrlParser: true},function(err,db){
    if(err){
        console.log("Can not connect to mongoDb",url);
        process.exit(1);
    }else{
        console.log("Connect to mongoDb",url);
    }
});

