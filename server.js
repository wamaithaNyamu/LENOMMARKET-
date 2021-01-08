const express = require("express");
const connectDb = require("./BACKEND/config/db");
const app = express();

//connect to db
connectDb();

//Init middleware
app.use(express.json({ extended: false }));

//Define routes

app.use("/register", require("./BACKEND/routes/api/authentication/register"));
app.use("/login", require("./BACKEND/routes/api/authentication/login"));

//add routes here
//products
app.use("/createProduct", require("./BACKEND/routes/api/Products/createProduct"))
app.use("/singleProduct", require("./BACKEND/routes/api/Products/singleProduct"))

//announcements
app.use("/createAnnouncement", require("./BACKEND/routes/api/Dashboard/Announcements/createAnnouncement"));
app.use("/singleAnnouncement", require("./BACKEND/routes/api/Dashboard/Announcements/singleAnnouncement"));
app.use("/newStaff", require("./BACKEND/routes/api/Dashboard/Staff/createStaff"));
app.use("/profile", require("./BACKEND/routes/Profile/profile"))


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
