const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const Product = require("../../../../Models/Dashboard/Announcements/Announcements");
const { check, validationResult } = require("express-validator/check");


// @router  GET /:announcement_id
// @desc    Get single announcement by ID
// @access  Private

router.get("/:announcement_id", auth, async (req, res) => {
    try {
        const product = await Product.findOne({
            AnnouncementID: req.params.announcement_id,
        });
        //if the product doesnt exists in the db
        if (!product){

            return res.status(400).json({ msg: "Announcement not found" });
        }
        // if product exists

        res.json(product);

    } catch (e) {
        console.error(e.message);
        return res.status(400).json({ msg: "Something went wrong while fetching the announcement." });
    }
});

// @router  POST /:announcement_id
// @desc    Update a single announcement by ID from admin dashboard
// @access  Private
router.post(
    "/:announcement_id",
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
            AnnouncementID,
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
        const announcementFields = {};

        if(AnnouncementID) announcementFields.AnnouncementID = req.params.announcement_id;
        if (name) announcementFields.name = name;
        if(category) announcementFields.category = category;
        if(subcategory) announcementFields.subcategory = subcategory;
        if(discount) announcementFields.discount = discount;
        if(price) announcementFields.price = price;
        if(description) announcementFields.description = description;
        if(colors) announcementFields.colors = colors;
        if(size) announcementFields.size = size;
        if(additionalInfo) announcementFields.additionalInfo = additionalInfo;
        if(specification) announcementFields.specification = specification
        if(topSelling) announcementFields.topSelling = topSelling;
        if(imageVariants) announcementFields.imageVariants = imageVariants
        if(imageVariantDescription) announcementFields.imageVariantDescription = imageVariantDescription



        try {
            //confirm its in the db
            let product = await Product.findOne({ AnnouncementID: req.params.announcement_id });
            if (product) {
                //    update profile
                product = await Product.findOneAndUpdate(
                    {  AnnouncementID: req.params.announcement_id  },
                    { $set: announcementFields },
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




// @router  DELETE /:announcement_id
// @desc    Delete announcement from admin dashboard
// @access  Private

router.delete("/:announcement_id", auth, async (req, res) => {
    try {
        //delete product
        await Product.findOneAndRemove({ AnnouncementID: req.params.announcement_id });

        res.json({ msg: "Announcement deleted " });
    } catch (e) {
        console.error(e.message);
        res.status(500).send("An error occurred while trying to delete the announcement");
    }
});

module.exports = router;
