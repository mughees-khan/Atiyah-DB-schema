const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ['admin', 'donor', 'receiver'], required: true },
  profileId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }
});


const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;