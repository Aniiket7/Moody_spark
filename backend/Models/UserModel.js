const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const UserModel = mongoose.Schema(
    {
        firstName : { type:String , required:true},
        lastName : { type:String , required:true},
        email : { type:String , required:true,unique:true },
        mobile : { type:Number , required:true, unique:true,maxLength:10},
        password : { type:String , required:true},
        address : { type:String ,default:"e.g sant colony ,delhi"},
        city : { type:String , default:"e.g delhi"},
        state : { type:String , default:"e.g delhi"},
        pincode : { type:Number,maxLength:6 , "default":110085}
    }
    ,
    {
        timestamps:true,
    }
);
UserModel.pre('save',async function (next) {
    if (!this.isModified) {
        next();
    }
    // const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,10)
})

UserModel.methods.matchPass = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}
const User = mongoose.model("User", UserModel);
module.exports = User;