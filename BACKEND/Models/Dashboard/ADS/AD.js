const mongoose = require("mongoose");

const ADSchema = new mongoose.Schema({
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


});

module.exports = ADS = mongoose.model("ADS", ADSchema);
