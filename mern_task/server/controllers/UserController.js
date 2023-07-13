const userModel = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createJWT } = require("../jwt/createJWT");


exports.LogIn = async (req, res, next) => {

  let { name, password } = req.body;
  if (!name || !password) {
    res.status(400).send("Name and Password Required")
    }

  userModel.findOne({ name: name }).then(user => {
      bcrypt.compare(password, user.password).then(isMatch => {
        if (!isMatch) {
          return res.status(401).send("Invalid password")
        }
        let access_token = createJWT(
          user.email,
          user._id,
          3600
        );
        const maxAge = 1000 * 60 * 60 * 24
        res.status(202).cookie('JWT_token', access_token, { maxAge, httpOnly: true }).send("token added").json({
          email: user.email,
          name: user.name,
          _id: user._id
        })
      }).catch(err => {
          return res.status(404).send("User not found")
      });
  })
}

exports.SignUp = async (req, res, next) => {
  const { name, email, password } = req.body
  if (!name ||!password || !email) {
    res.status(400).send("Each field required")
  }
  const user = await userModel.exists({ $or: [{ email: email }, { name: name }] })
  if (user) {
    res.status(409).send("try with another username or email ")
  } else {
    const user = new userModel({ name, email, password })
    user.password = await bcrypt.hash(user.password, 12);
    await user.save();
    res.send("user added")
    console.log("recorde added");
  }
}


exports.LogOut = async (req, res, next) => {
  res.status(202).cookie('JWT_token', "").send("logout")

}