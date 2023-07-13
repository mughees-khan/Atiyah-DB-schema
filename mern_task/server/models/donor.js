const mongoose = require("mongoose");

const { Schema } = mongoose;

const donorSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});


const donorModel = mongoose.model("donorModel", donorSchema);

module.exports = donorModel;