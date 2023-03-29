const express = require('express');
const ProductSchema = require('../Models/ProductModel')
const router = express.Router();


const addProduct = async (req, res) => {

    const { name, desc, price, category, size, imageurl, quantity } = req.body;
    if (!name || !desc || !price || !category || !size || !imageurl || !quantity) {
        res.status(400);
        throw new error("please fill all the details");
    }
    const product = await ProductSchema.create({
        name, desc, price, category, size, imageurl, quantity
    });
    if (product) {
        res.status(201).json({
            _id: product._id,
            name: product.name,
            desc: product.desc,
            price: product.price,
            category: product.category,
            size: product.size,
            imageurl: product.imageurl,
            quantity: product.quantity
        })
    }
    else {
        res.status(400);
        throw new error("failed to create product");
    }

}

router.post('/add', addProduct)



const upProduct = async (req, res) => {
    let prid = req.params.prid;

    const { name, desc, price, category, size, imageurl, quantity } = req.body;
    if (!name || !desc || !price || !category || !size || !imageurl || !quantity) {
        res.status(400);
        throw new error("please fill all the details");
    }
    const product = await ProductSchema.findOneAndUpdate({
        _id: prid
    }, {
        name: name,
        desc: desc,
        price: price,
        category: category,
        size: size,
        imageurl: imageurl,
        quantity: quantity
    });
    if (product) {
        res.status(201).json({
            "msg": "done"
        })
    }
    else {
        res.status(400);
        throw new error("failed to update product");
    }

}

router.post('/update/:prid', upProduct)





const delProduct = async (req, res) => {
    let prid = req.params.prid;

    const product = await ProductSchema.findOneAndRemove({
        _id: prid
    });
    if (product) {
        res.status(201).json({
            "msg": "done"
        })
        console.log(product);
    }
    else {
        res.status(400);
        throw new error("failed to delete product");
    }

}

router.post('/delete/:prid', delProduct)


const getProduct = async (req, res) => {
    const products = await ProductSchema.find({});
    if (products) {
        res.status(200).json({
         products
        })
    }
    else {
        console.log("no products");
    }
}

router.get('/getall', getProduct)





const getOneProduct = async (req, res) => {
    const products = await ProductSchema.findById({_id: req.params.id});
    if (products) {
        res.status(200).json({
         products
        })
    }
    else {
        console.log("no single product");
    }
}

router.get('/get/:id', getOneProduct)





module.exports = router;

