const mongoose = require("mongoose");

const MealsSchema= mongoose.Schema({ 
    mealID: {
        type: String,
        required : true,
        unique: true,
        sparse: true
    },
    name : {
        type : String,
        required : true,        
    },
    price : {
        type : Number,
        required : true,  
    },
    description : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required: true,
    },
    date : {
        type : Date,
        default : Date.now,
    },
    available : {
        type : Boolean,
        required : true,
    },
    hot : {
        type : Boolean,
        required : false,
    },
    new : {
        type : Boolean,
        required : false,
    },
    discount : {
        type : Number,
        required : false,
    }
})

const Meals = mongoose.model("Meals", MealsSchema);
module.exports = Meals;