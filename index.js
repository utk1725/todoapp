//server creation
const express = require('express');
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");

//add the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(PORT, () => {
    console.log('server started successfully at ${PORT}');
})

//connect to the database
const dbconnect = require("./config/database");
dbconnect();

//default Route
app.get("/",(req,res) =>{
    res.send('<h1>This is HOMEPAGE <h1>');
})