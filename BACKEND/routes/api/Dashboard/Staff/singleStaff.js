const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const Staff = require("../../../../Models/Dashboard/Staff/Staff");
const { check, validationResult } = require("express-validator/check");


// @router  GET /:staff_id
// @desc    Get single Staff by ID
// @access  Private

router.get("/:staff_id", auth, async (req, res) => {
    try {
        const staff = await Staff.findOne({
            staffID: req.params.staff_id,
        });
        //if the Staff doesnt exists in the db
        if (!staff){

            return res.status(400).json({ msg: "Staff not found" });
        }
        // if Staff exists

        res.json(staff);

    } catch (e) {
        console.error(e.message);
        return res.status(400).json({ msg: "Something went wrong while fetching the Staff." });
    }
});

// @router  POST /:staff_id
// @desc    Update a single Staff by ID from admin dashboard
// @access  Private
router.post(
    "/:staff_id",
    [auth, [check("fname", "First Name is required").not().isEmpty()],
        [check("lname", "Surname is required").not().isEmpty()],

        [check("IDNumber", "ID number is required").not().isEmpty()],
        [check("IDPhoto", "ID photo is required").not().isEmpty()],
        [check("passport", "Passport photo number is required").not().isEmpty()],
        [check("jobDescription", "Job description is required").not().isEmpty()],
        [check("storeLocation", "Store location is required").not().isEmpty()],

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {

            fname,
            lname,

            IDNumber,
            IDPhoto,
            passport,
            jobDescription,
            storeLocation


        } = req.body;


        const staffFields = {};
        staffFields.staffID =uuidv4();
        if (fname) staffFields.fname = fname;
        if(lname) staffFields.lname = lname;
        if(IDNumber) staffFields.IDNumber = IDNumber;
        if(IDPhoto) staffFields.IDPhoto = IDPhoto;
        if(passport) staffFields.passport = passport;
        if(jobDescription) staffFields.jobDescription = jobDescription;
        if(storeLocation) staffFields.storeLocation = storeLocation;





        try {
            //confirm its in the db
            let Staff = await Staff.findOne({ staffID: req.params.staff_id });
            if (Staff) {
                //    update profile
                Staff = await Staff.findOneAndUpdate(
                    {  staffID: req.params.staff_id  },
                    { $set: StaffFields },
                    { new: true }
                );

                console.log('updated Staff', Staff)

                return res.json(Staff);
            }

        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occurred while updating the Staff");
        }
    }
);




// @router  DELETE /:staff_id
// @desc    Delete Staff from admin dashboard
// @access  Private

router.delete("/:staff_id", auth, async (req, res) => {
    try {
        //delete Staff
        await Staff.findOneAndRemove({ staffID: req.params.staff_id });

        res.json({ msg: "Staff deleted " });
    } catch (e) {
        console.error(e.message);
        res.status(500).send("An error occurred while trying to delete the Staff");
    }
});

module.exports = router;
