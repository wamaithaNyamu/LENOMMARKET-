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

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
