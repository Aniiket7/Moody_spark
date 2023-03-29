const { default: mongoose } = require("mongoose");

const ContactModel = mongoose.Schema(
    {
        name : {type:String ,require:true},
        mail : {type:String ,require:true},
        message : {type:String ,require:true},
    }
);

const Contact = mongoose.model("contact us",ContactModel);
module.exports = Contact