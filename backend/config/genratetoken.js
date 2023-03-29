const jwt = require('jsonwebtoken')
const genrateToken = (id)=>{
    return jwt.sign({id},"aniket",{
        expiresIn:"90d",
    })
}
module.exports = genrateToken;