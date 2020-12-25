const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, '../../../env')})
const express = require("express");
const router = express.Router();
const User = require("../../../Models/authentication/User");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwtSecret = process.env.jwtSecret




// @router  POST api/auth
// @desc    Login user
// @access Public

router.post(
    "/",
    [
        check("phone", "Phone number is required").exists(),
        check("password", "Password is required").exists(),
    ],

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { phone, password } = req.body;
        try {
            //see iif user exists
            let user = await User.findOne({ phone });
            if (!user) {
                res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
            }
            //return json webtoken
            const payload = {
                user: {
                    id: user.id,
                },
                role: {
                    role: user.role,
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
        } catch (e) {
            console.error(e.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;
