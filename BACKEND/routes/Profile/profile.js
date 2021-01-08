const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const Profile = require("../../Models/Dashboard/Clients/Profile");
const User = require("../../Models/authentication/User");

// @router  GET /user
// @desc    Get current users profile
// @access Private
router.get("/me", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id,
        }).populate("user", ["name", "email"]);

        if (!profile) {
            return res.status(400).json({ msg: "Theres no profile for this user" });
        }

            res.json(profile);
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server error");
    }
});

// @router  POST api/profile/
// @desc    Create or update a user profile
// @access Private

router.post(
    "/",
    [auth,


            [check("firstName", "First name is required").not().isEmpty()],

        [check("secondName", "Second name is required").not().isEmpty()],

        [check("phoneNumber", "Phone number is required").not().isEmpty()],

        [check("county", "County name is required").not().isEmpty()],

        [check("areaDescription", "Area description is required").not().isEmpty()],

        [check("businessName", "Business name is required").not().isEmpty()],

        [check("howYouHeardUs", "How you heard about us is required").not().isEmpty()],

        [check("promotions", "Promotions is required").not().isEmpty()],

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            firstName,
            secondName,
            phoneNumber,
            country,
            county,
            areaDescription,
            businessName,
            howYouHeardUs,
            promotions,

        } = req.body;

        //build profile object
        const profileFields = {};

        //create and update profile routes
        profileFields.user = req.user.id;
        if (firstName) profileFields.firstName = firstName;
        if (secondName) profileFields.secondName = secondName;
        if (phoneNumber) profileFields.phoneNumber =phoneNumber;
        if (country) profileFields.country = country;
        if (county) profileFields.county = county;
        if (areaDescription) profileFields.areaDescription = areaDescription;
        if (businessName) profileFields.businessName =businessName;
        if (howYouHeardUs) profileFields.howYouHeardUs = howYouHeardUs;
        if (promotions) profileFields.promotions = promotions;


        try {
            let profile = await Profile.findOne({ user: req.user.id });
            if (profile) {
                //    update profile
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                );


                return res.json(profile);
            }

            //    create
            profile = new Profile(profileFields);
            await profile.save();


            res.json(profile);
        } catch (e) {
            console.error(e.message);
            res.status(500).send("Server error");
        }
    }
);

// @router  GET api/profile
// @desc    Get all profiles admin only
// @access  Private

router.get("/all", auth, async (req, res) => {
    try {
        const checkRole = await User.findOne({
            _id: req.user.id,
        });

        if (checkRole.role !== "admin") {
            return res.status(403).send("Not authorized to view this route");
        }
        const profiles = await Profile.find().populate("user", [
            "name",

            "email",
            "role",
        ]);
        res.json(profiles);
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server error");
    }
});

// @router  GET api/profile/user/:user_id
// @desc    Get single profile by user id admin only
// @access  Private

router.get("/:user_id", auth, async (req, res) => {
    try {
        const checkRole = await User.findOne({
            _id: req.user.id,
        });

        if (checkRole.role !== "admin") {
            return res.status(403).send("Not authorized to view this route");
        }
        const singleProfile = await Profile.findOne({
            user: req.params.user_id,
        }).populate("user", ["name", "email"]);
        if (!singleProfile)
            return res.status(400).json({ msg: "Profile not found" });

        res.json(singleProfile);
    } catch (e) {
        console.error(e.message);
        if (e.kind === "ObjectId") {
            return res.status(400).json({ msg: "Profile not found" });
        }
    }
});

// @router  DELETE api/profile
// @desc    Delete profile user and posts for any role
// @access  Private

router.delete("/", auth, async (req, res) => {
    try {
        //delete profile
        await Profile.findOneAndRemove({ user: req.user.id });
        //delete user
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: "User deleted" });
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
