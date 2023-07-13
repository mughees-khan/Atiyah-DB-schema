const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReceiverSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const ReceiverModel = mongoose.model("ReceiverModel", ReceiverSchema);

module.exports = ReceiverModel;