const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    staffID :{
        type:String,
        required: true,
        unique:true
    },
    fname: {
        type: String,
        required: true,

    },
    lname: {
        type: String,
        required: true,

    },
    phone:{
        type: String,
        required: true,

    },
    IDNumber:{
        type: String,
        required: true,
        unique:true
    },
    IDPhoto:{
        type:String,
        required: true,
    },
    passport:{
        type:String,
        required: true,
    },
    jobDescription:{
        type:String,
        required: true,
        default:"WEA Staff"
    },
    storeLocation:{
        type:String,
        required: true,
    },


});

module.exports = Staffs = mongoose.model("staffProfile", StaffSchema);
