const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },

    staffID : {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    store:{
        type: String,
        required:true,
    }
});

module.exports = Users = mongoose.model("staff", UserSchema);
