//this file makes the connection btw the DB and Application//

const mongoose = require("mongoose");

//the defined properties in env will be load in the process object//
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connection successful"))
    .catch( (error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    });
}
module.exports = dbconnect;