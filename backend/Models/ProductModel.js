const mongoose = require("mongoose")
const sequencing = require('./Sequencing');
const ProductSchema = mongoose.Schema(
    {
        _id: Number,
        name: { type: String, required: true },
        desc: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        size: { type: String, required: true },
        imageurl: { type: String, required: true },
        quantity: { type: Number, required: true }
    }
    ,
    {
        timestamps: true,
    }
);
ProductSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("product_id").
        then(counter => {
            if (!counter) {
                sequencing.insertCounter("product_id")
                    .then(counter => {
                        doc._id = counter;
                        next();
                    })
                    .catch(error => next(error))
            } else {
                doc._id = counter;
                next();
            }
        })
        .catch(error => next(error))
});
const Product = mongoose.model("Products", ProductSchema); // Product is the name of the collection in the database
module.exports = Product;


