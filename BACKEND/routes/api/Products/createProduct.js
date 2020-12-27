const express = require("express");
const router = express.Router();
const auth = require("../../../Middleware/auth");
const { check, validationResult } = require("express-validator/check");
const createProductModel = require("../../../Models/Products/Product");
const { v4:uuidv4 } = require('uuid');



// @router  POST /createProduct
// @desc    create  a product from admin dashboard
// @access Private

router.post(
    "/",
    [auth, [check("name", "Name is required").not().isEmpty()],
        [check("category", "Category is required").not().isEmpty()],
        [check("subcategory", "Subcategory is required").not().isEmpty()],
        [check("price", "Price is required").not().isEmpty()],
        [check("description", "Description is required").not().isEmpty()],
        [check("colors", "Colors is required").not().isEmpty()],
        [check("size", "Size is required").not().isEmpty()],
        [check("specification", "Specification is required").not().isEmpty()],
        [check("imageVariants", "Image variants is required").not().isEmpty()],
        [check("imageVariantDescription", "Image variant description is required").not().isEmpty()],


    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            name,
            category,
            subcategory,
            discount,
            price,
            description,
            colors,
            size,
            additionalInfo,
            specification,
            topSelling,
            imageVariants,
            imageVariantDescription,

        } = req.body;

        //build profile object
        const productFields = {};
        productFields.productID =uuidv4();

        if (name) productFields.name = name;
        if(category) productFields.category = category;
        if(subcategory) productFields.subcategory = subcategory;
        if(discount) productFields.discount = discount;
        if(price) productFields.price = price;
        if(description) productFields.description = description;
        if(colors) productFields.colors = colors;
        if(size) productFields.size = size;
        if(additionalInfo) productFields.additionalInfo = additionalInfo;
        if(specification) productFields.specification = specification
        if(topSelling) productFields.topSelling = topSelling;
        if(imageVariants) productFields.imageVariants = imageVariants
        if(imageVariantDescription) productFields.imageVariantDescription = imageVariantDescription

        

        try {
            //    create
            let product = new createProductModel(productFields);
            await product.save();
            console.log('new product', product)
            res.json(product);
        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occured while creating a new product");
        }
    }
);


// @router  GET /getAllProducts
// @desc    get products
// @access Public

router.get(
    "/",
    async (req, res) => {


        try {
            const product = await createProductModel.find({});
            //if the product doesnt exists in the db
            if (!product){

                return res.status(400).json({ msg: "No products" });
            }
            // if product exists

            res.json(product);
        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occured while creating a new product");
        }
    }
);
module.exports = router;
