const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const Store = require("../../../../Models/Dashboard/Stores/Store");
const { check, validationResult } = require("express-validator/check");


// @router  GET /:store_id
// @desc    Get single Store by ID
// @access  Private

router.get("/:store_id", auth, async (req, res) => {
    try {
        const store = await Store.findOne({
            storeID: req.params.store_id,
        });
        //if the Store doesnt exists in the db
        if (!store){

            return res.status(400).json({ msg: "Store not found" });
        }
        // if Store exists

        res.json(store);

    } catch (e) {
        console.error(e.message);
        return res.status(400).json({ msg: "Something went wrong while fetching the Store." });
    }
});

// @router  POST /:store_id
// @desc    Update a single Store by ID from admin dashboard
// @access  Private
router.post(
    "/:store_id",
    [auth, [check("name", "Name is required").not().isEmpty()],
        [check("location", "location is required").not().isEmpty()],

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            storeID,
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
            //confirm its in the db
            let Store = await Store.findOne({ storeID: req.params.store_id });
            if (Store) {
                //    update profile
                Store = await Store.findOneAndUpdate(
                    {  storeID: req.params.store_id  },
                    { $set: StoreFields },
                    { new: true }
                );

                console.log('updated Store', Store)

                return res.json(Store);
            }

        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occurred while updating the Store");
        }
    }
);




// @router  DELETE /:store_id
// @desc    Delete Store from admin dashboard
// @access  Private

router.delete("/:store_id", auth, async (req, res) => {
    try {
        //delete Store
        await Store.findOneAndRemove({ storeID: req.params.store_id });

        res.json({ msg: "Store deleted " });
    } catch (e) {
        console.error(e.message);
        res.status(500).send("An error occurred while trying to delete the Store");
    }
});

module.exports = router;
