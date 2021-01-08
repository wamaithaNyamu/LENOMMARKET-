const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    firstName:{
        type: String,
        required: true,
    },
    secondName:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },

    country: {
        type: String,
        default:"Kenya"
    },

    county : {
        type: String,
        required: true,
    },

    areaDescription: {
        type: String,
        required: true,
    },

    businessName: {
        type: String,
        required: true,
    },

    howYouHeardUs: {
        type: String,
        required: true,
    },
    promotions:{
        type: String,
        required: true,
        default:"yes"
    }



});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
