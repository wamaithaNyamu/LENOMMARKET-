const express = require("express");
const router = express.Router();
const auth = require("../../../../Middleware/auth");
const { check, validationResult } = require("express-validator/check");
const announcmentModel = require("../../../../Models/Dashboard/Announcements/Announcements");
const { v4:uuidv4 } = require('uuid');



// @router  POST /createAnnouncement
// @desc    create  an announcement from admin dashboard
// @access Private

router.post(
    "/",
    [auth, [check("name", "Name is required").not().isEmpty()],
        [check("defaultAnnouncement", "Start date is required").not().isEmpty()],


    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const {

            name,
            startDate,
            endDate,
            backgroundUrl,
            defaultAnnouncement,
            status,


        } = req.body;

        //build profile object
        const announcementFields = {};
        announcementFields.AnnouncementID =uuidv4();
        if (name) announcementFields.name = name;
        if(startDate) announcementFields.startDate = startDate;
        if(endDate) announcementFields.endDate = endDate;
        if(backgroundUrl) announcementFields.backgroundUrl = backgroundUrl;
        if(defaultAnnouncement) announcementFields.defaultAnnouncement = defaultAnnouncement;
        if(status) announcementFields.status = status;



        try {

            //    create
            let announcement = new announcmentModel(announcementFields);
            await announcement.save();
            console.log('Announcement created!', announcement)
            res.json(announcement);
        } catch (e) {
            console.error(e.message);
            res.status(500).send("An error occured while creating your announcement");
        }
    }
);
module.exports = router;
