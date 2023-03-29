const mongoose = require("mongoose")
const Reviews = mongoose.Schema(
    {
        user : { type:mongoose.Schema.Types.ObjectId, required:true, ref:"User"},
        itemid : { type:String, required:true},
        rating : { type:Number, required:true},
        text : { type:String ,default:"e.g sant colony ,delhi"},
    }
    ,
    {
        timestamps:true,
    }
)

const reviewTable = mongoose.model("Reviews", Reviews);
module.exports = reviewTable;