const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productID :{
        type:String,
        required: true,
        unique:true

    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subcategory:{
        type: String,
        required: true,
    },
    discount : {
        type: Number,
        default:0
    },
    price: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },

    description:{
        type:String,
        required:true,

    },
    colors:{
        type:Array,
        required:true,

    },
    size:{
        type:String,
        required:true,

    },
    additionalInfo:{
        type:String,


    },
    specification:{
        type:String,
        required:true,

    },
    topSelling:{
        type:String,
        default:'no'
    },
    imageVariants:{
        type:String,
        required:true,
    },
    imageVariantDescription:{
        type:Array,
        required:true,
    }

});

module.exports = Products = mongoose.model("products", ProductSchema);
