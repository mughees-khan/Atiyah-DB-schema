const mongoose = require("mongoose");

const { Schema } = mongoose;

const profileSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstName: { type: String },
    lastName: { type: String },
    bio: { type: String },
    location: { type: String },
    avatar: { type: String },
    profileLink: { type: String }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
