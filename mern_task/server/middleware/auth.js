const jwt = require("jsonwebtoken");
require('dotenv').config()




const authenticateJWT = (req, res, next) => {
    const jwt_token = req.cookies.JWT_token;

console.log(jwt_token);
    if (jwt_token) {

        jwt.verify(jwt_token, process.env.TOKEN_SECRET, (err, user) => {
             if (err) {
                  throw new Error(err);
             }
             next();
         });
     }
      else {
            throw new Error('user not found')
     }
};



module.exports =authenticateJWT ;