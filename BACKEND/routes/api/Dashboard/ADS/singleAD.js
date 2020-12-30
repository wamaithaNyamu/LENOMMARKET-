const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const Ad = require("../../../../Models/Dashboard/ADs/ADs");
const { check, validationResult } = require("express-validator/check");


// @router  GET /:ad_id
// @desc    Get single AD by ID
// @access  Private

router.get("/:ad_id", auth, async (req, res) => {
    try {
        const Ad = await Ad.findOne({
            ADID: req.params.ad_id,
        });
        //if the Ad doesnt exists in the db
        if (!Ad){

            return res.status(400).json({ msg: "AD not found" });
        }
        // if Ad exists

        res.json(Ad);

    } catch (e) {
        console.error(e.message);
        return res.status(400).json({ msg: "Something went wrong while fetching the AD." });
    }
});

// @router  POST /:ad_id
// @desc    Update a single AD by ID from admin dashboard
// @access  Private
router.post(
    "/:ad_id",
    [auth, [check("name", "Name is required").not().isEmpty()],
        [check("mediaUrl", "Media is required").not().isEmpty()],


    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            ADID,
            name,
            mediaUrl,


        } = req.body;

        //build profile object
        const ADFields = {};

        if(ADID) ADFields.ADID = req.params.ad_id;
        if (name) ADFields.name = name;
        if(mediaUrl) ADFields.mediaUrl = mediaUrl;



        try {
            //confirm its in the db
            let Ad = await Ad.findOne({ ADID: req.params.ad_id });
            if (Ad) {
                //    update profile
                Ad = await Ad.findOneAndUpdate(
                    {  ADID: req.params.ad_id  },
                    { $set: ADFields },
                    { new: true }
                );

                console.log('updated Ad', Ad)

                return res.json(Ad);
            }

        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occurred while updating the Ad");
        }
    }
);




// @router  DELETE /:ad_id
// @desc    Delete AD from admin dashboard
// @access  Private

router.delete("/:ad_id", auth, async (req, res) => {
    try {
        //delete Ad
        await Ad.findOneAndRemove({ ADID: req.params.ad_id });

        res.json({ msg: "AD deleted " });
    } catch (e) {
        console.error(e.message);
        res.status(500).send("An error occurred while trying to delete the AD");
    }
});

module.exports = router;
