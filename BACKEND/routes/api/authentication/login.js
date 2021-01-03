const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, '../../../env')})
const express = require("express");
const router = express.Router();
const User = require("../../../Models/authentication/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.jwtSecret
const auth = require("../../../Middleware/auth")



// @router  POST /login
// @desc    Load user
// @access Public

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (e) {
        console.error(e.message);
        res.status(500).send("Server error");
    }
});

// @router  POST /login
// @desc    Login user
// @access Public

router.post(
    "/",
    [
        check("email", "Email is required").exists(),
        check("password", "Password is required").exists(),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        try {
            //see iif user exists
            let user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
            }else{



            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
            }
            //return json webtoken
            const payload = {
                user: {
                    id: user.id,
                },

            };
            jwt.sign(
                payload,
                jwtSecret,
                {
                    expiresIn: 36000,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
            }



        } catch (e) {
            console.error(e.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;
