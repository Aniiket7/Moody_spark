const express = require('express');
const Item = require("../Models/ProductModel")
const OrderT = require("../Models/OdrerModal")
const ReviewT = require("../Models/ReviewModel");
const { protect } = require('../middlewares/Protect');
const router = express.Router();



const createReview = async (req, res) => {
    const review = await ReviewT.create({ 
        user: req.user._id,
        itemid: req.params.iid,
        rating: req.body.rating,
        text: req.body.text
        // craeting user in db
    });

    if (review) {
        res.status(201).json({
            _id: review._id,
            user: review.user,
            rating: review.rating,
            item: review.itemid,
            text: review.text,
        })

    }
    else {
        res.status(400);
        throw new error("failed to create review");
    }
 }

 router.post('/create/:iid', protect, createReview);

const getReview = async (req, res) => {
    const review = await ReviewT.find({ itemid: req.params.iid }).populate("user");


    if (review) {
        res.status(201).json({
            review : review
        })

    }
    else {
        res.json({ message: "failed to get review" });
       
    }
 }
 
    router.get("/get/:iid", getReview);
const getRating = async (req, res) => {
    const review = await ReviewT.find({ itemid: req.params.iid });


    if (review) {
        res.status(201).json({
            review : review
        })

    }
    else {
        res.json({ message: "failed to get review" });
       
    }
 }
 
    router.get("/get/:iid", getReview);

 module.exports = router;