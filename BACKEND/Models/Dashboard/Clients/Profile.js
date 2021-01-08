const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
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
    },

    businessName: {
        type: String,
        required: true,
    },

    howYouHeardUs: {
        type: String,
        required: true,
    },



});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
