const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const { check, validationResult } = require("express-validator/check");
const ADModel = require("../../../../Models/Dashboard/Announcements/Announcements");
const { v4:uuidv4 } = require('uuid');


// @router  POST /createAD
// @desc    create  an AD from admin dashboard
// @access Private
router.post(
    "/",
    [auth, [check("name", "Name is required").not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const {
            name,
            mediaUrl,

           } = req.body;

        //build AD object
        const ADFields = {};
        ADFields.ADID =uuidv4();
        if (name) ADFields.name = name;
        if(mediaUrl) ADFields.mediaUrl = mediaUrl;


        try {
            //    create
            let ad = new ADModel(ADFields);
            await ad.save();
            console.log('AD created!', ad)
            res.json(ad);
        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occured while creating your AD");
        }
    }
);
module.exports = router;
