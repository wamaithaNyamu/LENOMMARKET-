const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({

    subject: {
        type: String,
        required: true,
    },
    message: {
        type: Date,

    },
    date:{
        type: Date,
        default: Date.now,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }


});

module.exports = Notifications = mongoose.model("staffNotifications", NotificationSchema);
