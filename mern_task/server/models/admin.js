const mongoose = require("mongoose");

const { Schema } = mongoose;

const adminSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});


const adminModel = mongoose.model("adminModel", adminSchema);

module.exports = adminModel;