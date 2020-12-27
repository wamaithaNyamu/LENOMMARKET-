const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
    ADID :{
        type:String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
        default:"default"
    },

    mediaUrl:{
        type: String,

    },

    status:{
        type:String,
        default:"inactive"

    }


});

module.exports = Announcements = mongoose.model("Announcements", AnnouncementSchema);
