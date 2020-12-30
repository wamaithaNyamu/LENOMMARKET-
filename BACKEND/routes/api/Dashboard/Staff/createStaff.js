const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const { check, validationResult } = require("express-validator/check");
const Staff = require("../../../../Models/Dashboard/Staff/newStaff");
const User = require("../../../../Models/authentication/User")
const { v4:uuidv4 } = require('uuid');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, "../../../../../.env")})
const JWTSECRET = process.env.jwtSecret


const Notification = require("../../../../Models/Dashboard/Notifications/staffNotifications")

// @router  POST /registerNewStaff
// @desc    create  an announcement from admin dashboard
// @access Private

router.post(
    "/",
    [auth,
        check("email", "Please give a valid email ").isEmail(),
        check(
            "password",
            "Please enter a password with six or more characters"
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json(400).json({ errors: errors.array() });
        }
        let staffID =uuidv4()
        const {
            admin,
            name,
            email,
            password,
            store,

           } = req.body;
        let staff = await Staff.findOne({ email });
        if (staff) {
            res.status(400).json({ errors: [{ msg: "Staff already exists" }] });
        }


        staff = new Staff({
            admin,
            name,
            staffID,
            email,
            store,
        });
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        staff.password = await bcrypt.hash(password, salt);
        await staff.save();

        let role = "staff"
        let user = new User({
            name,
            email,
            password,
            role
        });
        console.log(user)


        //encrypt password

        user.password = await bcrypt.hash(password, salt);
        await user.save();

        //add notifcation
        const notification = {
            subject: "New staff added",
            message : `${admin} added ${name} as a staff.`

        }
        console.log("Notice", notification)

        //return json webtoken

        const payload = {
            staff: {
                id: staff.id,
            },
        };
        console.log('PAYLOAD CREATE STAFF',payload)
        jwt.sign(
            payload,
            JWTSECRET,
            {
                expiresIn: 360000,
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (e) {
            console.error(e.message);
            res.json(500).send("An error occurred while creating a new staff");
        }
    }
);
module.exports = router;
