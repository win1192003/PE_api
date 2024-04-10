const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({ 
    paymentID : {
        type : Number,
        unique: true,
        require : true
    },
    shippingAddress : {
        type: String,
        require : true
    },
    amount : {
        type : Number,
        require : true
    },
    payMethod : {
        type : String,
        require : true
    },
    payDate : {
        type: Date,
        require : true
    }
})

const payment = mongoose.model("payment", paymentSchema);
module.exports = payment;