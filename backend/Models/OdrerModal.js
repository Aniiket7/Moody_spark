const mongoose = require("mongoose")
const Orders = mongoose.Schema(
    {
        user : { type:mongoose.Schema.Types.ObjectId, required:true, ref:"User"},
        itemid : { type:String, required:true},
        itemurl : { type:String, required:true},
        itemname : { type:String, required:true},
        size : { type:String, required:true},
        qty : { type:Number , required:true},
        price : { type:Number , required:true},
        address : { type:String ,default:"e.g sant colony ,delhi"},
        city : { type:String , default:"e.g delhi"},
        state : { type:String , default:"e.g delhi"},
        pincode : { type:Number,maxLength:6 , "default":110085},
        status : { type:String , default:"pending"}

    }
    ,
    {
        timestamps:true,
    }
)

const Order = mongoose.model("Orders", Orders);
module.exports = Order;