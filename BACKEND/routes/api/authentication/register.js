const express = require("express");
const { check, validationResult } = require("express-validator/check");
let User = require("../../../Models/authentication/User.js");
const jwt = require("jsonwebtoken");
const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, '../../../env')})

const router = express.Router();
const bcrypt = require("bcryptjs");

const JWTSECRET = process.env.jwtSecret


// @router  POST api/users
// @desc    register user
// @access Public
router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please give a valid email ").isEmail(),
        check(
            "password",
            "Please enter a password with six or more characters"
        ).isLength({ min: 6 }),
        check(
            "phone",
            "Please enter a valid phone number of the form 0712123123"
        ).isLength({ min: 10 }),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, phone, date,role } = req.body;
        try {
            //see iif user exists
            let user = await User.findOne({ phone });
            if (user) {
                res.status(400).json({ errors: [{ msg: "User already exists" }] });
            }

            user = new User({
                name,
                email,
                password,
                phone,
                date,
                role
            });
            console.log(user)


            //encrypt password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

            //return json webtoken
            const payload = {
                user: {
                    id: user.id,
                },
            };
            jwt.sign(
                payload,
                JWTSECRET,
                {
                    expiresIn: 36000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

            res.send('User registered!');
        } catch (e) {
            console.error(e.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;
