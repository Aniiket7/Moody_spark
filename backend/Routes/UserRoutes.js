const express = require('express');
const expressAsyncHandler = require("express-async-handler");
// const { protect } = require('../controllers/middlewares/authMIddleware');
// const { signup, login, allUsers } = require('../controllers/userController');
const User = require("../Models/UserModel")
const genrateToken = require("../config/genratetoken")
const router = express.Router();
const jwt = require("jsonwebtoken");




const signup = expressAsyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, mobile } = req.body; // destrucuring from req.body

    if (!firstName || !lastName || !email || !password || !mobile) {
        res.status(400);
        throw new error("please fill all the details");
    }

    const userExists = await User.findOne({ mobile })

    if (userExists) {
        res.json({
            message: "user already exists"
        })
    }
    const user = await User.create({ // craeting user in db
        firstName, lastName, email, mobile, password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            mobile: user.mobile,
            token: genrateToken(user._id)
        })
        console.log(user);

    }
    else {
        res.status(400);
        throw new error("failed to create user");

    }
});





const login = async (req, res) => {
    const { pass, mobile } = req.body;

    const userExists = await User.findOne({ mobile })

    if (userExists && (await userExists.matchPass(pass))) {
        res.status(200).json({
            _id: userExists._id,
            name: userExists.firstName,
            email: userExists.email,
            token: genrateToken(userExists._id)
        })
    }
    else {
        res.status(400).json({
            message: "Invalid credentials"
        });
    }


}

// router.route("/").post(signup).get(aaa);
router.post("/", signup)
router.post("/login", login)


const getuser = async (req, res) => {

    const token = req.params.token;
    const decoded = jwt.verify(token, "aniket");
    console.log(decoded);
    const oneUser = await User.findById(decoded.id).select("-password");
    if (oneUser) {

        res.status(200).json(oneUser);
    }
    else {
        res.status(400).json({
            message: "Invalid credentials"
        });

    }
}

router.get("/getuser/:token", getuser)


const updateuser = async (req, res) => {

    const token = req.params.token;
    const decoded = jwt.verify(token, "aniket");
    const oneUser = await User.findById(decoded.id);
    if (oneUser) {

       const upuser =await User.findOneAndUpdate({_id:oneUser._id},
            { 
                firstName : req.body.firstname,
                lastName : req.body.lastName,
                email : req.body.email,
                mobile:req.body.mobile,
                address:req.body.address,
                city : req.body.city,
                state : req.body.state,
                pincode : req.body.pincode       
            },{new:true}
            )
            if (upuser) {
                res.status(200).json(upuser);
            }
            else {
                res.status(400).json({
                    message: "user not updated"
                });
        
            }
                
            
           
    }
    else {
        res.status(400).json({
            message: "user not found"
        });

    }

}

router.post("/update/:token", updateuser)

module.exports = router;