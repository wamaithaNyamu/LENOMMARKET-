const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
    storeID :{
        type:String,
        required: true,
        unique:true
    },
    name: {
        type: String,
        required: true,

    },
    phone1:{
        type: String,
    },
    phone2:{
        type: String,
    },
    location:{
        type:String,
        required: true,
    }

});

module.exports = Stores = mongoose.model("Stores", StoreSchema);
