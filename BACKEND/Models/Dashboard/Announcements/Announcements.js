const mongoose = require("mongoose");

const AnnouncementSchema = new mongoose.Schema({
    AnnouncementID :{
        type:String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,

    },
    endDate:{
        type: Date,

    },
    backgroundUrl:{
        type: String,

    },
    defaultAnnouncement:{
        type: String,
        required: true,
        default:"🚚🚚 WE DELIVER COUNTRY WIDE! 🚚🚚"
    },
    status:{
        type:String,
        default:"inactive"

    }


});

module.exports = Announcements = mongoose.model("Announcements", AnnouncementSchema);
