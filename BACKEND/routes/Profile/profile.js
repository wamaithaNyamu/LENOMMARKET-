const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const Profile = require("../../Models/Profile");
const User = require("../../Models/User");

// @router  GET /user
// @desc    Get current users profile
// @access Private
router.get("/user", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.user.id,
        }).populate("user", ["name", "avatar", "role", "email"]);

        if (!profile) {
            return res.status(400).json({ msg: "Theres no profile for this user" });
        }

        (profile.binaryToken = decrypt(profile.binaryToken)),
            (profile.MT5LoginID = decrypt(profile.MT5LoginID)),
            (profile.MT5LoginPassword = decrypt(profile.MT5LoginPassword)),
            (profile.MT5LoginServer = decrypt(profile.MT5LoginServer)),
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
    [auth, [check("binaryToken", "Token is required").not().isEmpty()]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {
            firstName,
            secondName,
            binaryToken,
            MT5LoginID,
            MT5LoginPassword,
            MT5LoginServer,
            country,
        } = req.body;

        //build profile object
        const profileFields = {};
        const hashedTotext = function (hash) {
            const enc = encrypt(hash);
            return enc;
        };

        //create and update profile routes
        profileFields.user = req.user.id;
        if (firstName) profileFields.firstName = firstName;
        if (secondName) profileFields.secondName = secondName;
        if (binaryToken) profileFields.binaryToken = hashedTotext(binaryToken);
        if (MT5LoginID) profileFields.MT5LoginID = hashedTotext(MT5LoginID);
        if (MT5LoginPassword)
            profileFields.MT5LoginPassword = hashedTotext(MT5LoginPassword);
        if (MT5LoginServer)
            profileFields.MT5LoginServer = hashedTotext(MT5LoginServer);
        if (country) profileFields.country = country;
        try {
            let profile = await Profile.findOne({ user: req.user.id });
            if (profile) {
                //    update profile
                profile = await Profile.findOneAndUpdate(
                    { user: req.user.id },
                    { $set: profileFields },
                    { new: true }
                );
                profile.binaryToken = decrypt(profile.binaryToken);

                return res.json(profile);
            }

            //    create
            profile = new Profile(profileFields);
            await profile.save();
            profile.binaryToken = decrypt(profile.binaryToken);

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

router.get("/", auth, async (req, res) => {
    try {
        const checkRole = await User.findOne({
            _id: req.user.id,
        });

        if (checkRole.role !== "admin") {
            return res.status(403).send("Not authorized to view this route");
        }
        const profiles = await Profile.find().populate("user", [
            "name",
            "avatar",
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

router.get("/user/:user_id", auth, async (req, res) => {
    try {
        const checkRole = await User.findOne({
            _id: req.user.id,
        });

        if (checkRole.role !== "admin") {
            return res.status(403).send("Not authorized to view this route");
        }
        const singleProfile = await Profile.findOne({
            user: req.params.user_id,
        }).populate("user", ["name", "avatar"]);
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
