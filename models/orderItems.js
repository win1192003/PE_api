const mongoose = require("mongoose");

const orderItemSchema = mongoose.Schema({ 

    Quantity: {
        type : Number,
        required: true
    },
    item : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Meals'
    }
})

const orderItems = mongoose.model("orderItems", orderItemSchema);
module.exports = orderItems;