const express = require("express");
const router = express.Router();
const auth = require("../../../Middleware/auth");
const Product = require("../../../Models/Products/Product");
const { check, validationResult } = require("express-validator/check");


// @router  GET /:productID
// @desc    Get single product by ID
// @access  Private

router.get("/:product_id", auth, async (req, res) => {
    try {
        const product = await Product.findOne({
            productID: req.params.product_id,
        });
        //if the product doesnt exists in the db
        if (!product){

            return res.status(400).json({ msg: "Product does not exist" });
        }
        // if product exists

        res.json(product);

    } catch (e) {
        console.error(e.message);
        return res.status(400).json({ msg: "Something went wrong while fetching the product." });
    }
});

// @router  POST /:productID
// @desc    Update a single product by ID from admin dashboard
// @access  Private
router.post(
    "/:product_id",
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
            productID,
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

        if(productID) productFields.productID = req.params.product_id;
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
            //confirm its in the db
            let product = await Product.findOne({ productID: req.params.product_id });
            if (product) {
                //    update profile
                product = await Product.findOneAndUpdate(
                    {  productID: req.params.product_id  },
                    { $set: productFields },
                    { new: true }
                );

                console.log('updated product', product)
                return res.json(product);
            }

        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occurred while updating the product");
        }
    }
);




// @router  DELETE /:product_id
// @desc    Delete product by ID
// @access  Private

router.delete("/:product_id", auth, async (req, res) => {
    try {
        //delete product
        await Product.findOneAndRemove({ productID: req.params.product_id });

        res.json({ msg: "Product deleted" });
    } catch (e) {
        console.error(e.message);
        res.status(500).send("An error occurred while trying to delete the product");
    }
});

module.exports = router;
