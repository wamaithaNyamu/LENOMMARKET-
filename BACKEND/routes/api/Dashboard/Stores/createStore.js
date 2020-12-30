const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const { check, validationResult } = require("express-validator/check");
const storeModel = require("../../../../Models/Dashboard/Stores/Store");
const { v4:uuidv4 } = require('uuid');



// @router  POST /createStore
// @desc    create  an Store from admin dashboard
// @access Private

router.post(
    "/",
    [auth, [check("name", "Name is required").not().isEmpty()],
        [check("location", "location is required").not().isEmpty()],


    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {

            name,
            phone1,
            phone2,
            location,


        } = req.body;

        //build profile object
        const StoreFields = {};
        StoreFields.storeID =uuidv4();
        if (name) StoreFields.name = name;
        if(phone1) StoreFields.phone1 = phone1;
        if(phone2) StoreFields.phone2 = phone2;
        if(location) StoreFields.location = location;
        try {

            //    create
            let Store = new storeModel(StoreFields);
            await Store.save();
            console.log('Store created!', Store)
            res.json(Store);
        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occured while creating your Store");
        }
    }
);
module.exports = router;
