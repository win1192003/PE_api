const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({ 
    OrderID : {
        type : String,
        unique: true,
        required: true,
        trim: true
    },
    OrderDate : {
        type: date,
        required: true,
    },
    totalAmount :{
        type : Number,
        required : true,
    },
    item: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'orderItems'
    }
})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
