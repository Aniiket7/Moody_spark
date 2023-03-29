const express = require('express');
const expressAsyncHandler = require("express-async-handler");
const { protect } = require('../middlewares/Protect');
// const { signup, login, allUsers } = require('../controllers/userController');
const User = require("../Models/UserModel")
const Item = require("../Models/ProductModel")
const OrderT = require("../Models/OdrerModal")
const genrateToken = require("../config/genratetoken")
const router = express.Router();
const jwt = require("jsonwebtoken");


const createorder = async (req, res) => {
    const { qty, address, city, state, pincode } = req.body;
    // const token = req.params.token;
    // const decoded = jwt.verify(token, "aniket");
    // const oneUser = await User.findById(decoded.id).select("-password");
    const iid = req.params.iid;
    const product = await Item.findById(iid);

    if (req.user.pincode !== 0 && qty > 0) {

        OrderT.create({
            user: req.user._id,
            itemid: product._id,
            itemurl : product.imageurl,
            itemname : product.name,
            size : req.body.size,
            qty: req.body.qty,
            price: product.price * req.body.qty,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            status: "pending"
        }).then(order => {
            res.status(200).json({
                message: "order placed successfully",
                order: order
            })
        }).catch(err => {
            res.status(500).json({
                message: "error in placing order",
                error: err
            })
        }
        )
    }
    else {
        res.status(400).json({
            message: "no user"
        });

    }
}

router.post("/create/:iid", protect, createorder);


const fetchorders = async (req, res) => {


   const ordres = await OrderT.find({ user: req.user._id });
    res.status(200).json(ordres);

}

router.get("/get", protect, fetchorders);


const fetchordersall = async (req, res) => {
    if (req.user.mobile !== 1) {
        return;
        
    }

   const ordres = await OrderT.find().populate("user").sort({createdAt:-1});
    res.status(200).json(ordres);

}

router.get("/getall",protect, fetchordersall);


const updateorder = async (req, res) => {
    if (req.user.mobile !== 1) {
        return;
        
    }


   const ordres = await OrderT.findOneAndUpdate({ _id: req.params.id }, { status: req.body.status });
   const updateProd = await Item.findOneAndUpdate({ _id: ordres.itemid }, { $inc: { quantity: -ordres.qty } });
    res.status(200).json(ordres);
    

}

router.post("/update/:id",protect, updateorder);

const deleteorder = async (req, res) => {
    if (req.user.mobile !== 1) {
        return;
        
    }


   const ordres = await OrderT.findOneAndDelete({ _id: req.params.id }, { status: req.body.status });
    res.status(200).json({"message":"deleted"});

}

router.delete("/delete/:id",protect, deleteorder);

module.exports = router;