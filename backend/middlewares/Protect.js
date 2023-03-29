const jwt = require("jsonwebtoken");
const User = require('../Models/UserModel');
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
      req.headers.authorization &&                     //token bearer thi start javi joie
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1]; // removing bearer fom the token
  
        //decodes token id
        const decoded = jwt.verify(token,"aniket");
  
        req.user = await User.findById(decoded.id).select("-password");
  
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  });

  module.exports = { protect };