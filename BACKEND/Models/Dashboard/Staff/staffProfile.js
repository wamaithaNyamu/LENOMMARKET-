const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
    admin: {
        type: String,
        required: true,
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    staffID : {
      type: String,
      required: true
    },
    admin : {
        type: String,
        required: true
    },
    email:{
        type: String,
        unique:true
    },
    storeLocation:{
        type:String,
    },

    fname: {
        type: String,

    },
    lname: {
        type: String,
    },
    phone:{
        type: String,
    },
    IDNumber:{
        type: String,
        unique:true
    },
    IDPhoto:{
        type:String,
    },
    passport:{
        type:String,
    },
    jobDescription:{
        type:String,

    },


});

module.exports = Staffs = mongoose.model("staffProfile", StaffSchema);
