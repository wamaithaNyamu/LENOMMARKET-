const mongoose = require("mongoose");
const path = require("path");
require('dotenv').config({path:path.resolve(__dirname, '../../.env')})

const db = process.env.MONGOURI;

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("MongoDB connected ...");
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
};

module.exports = connectDb;
