const express = require("express");
require("dotenv").config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json()); // This is for the body to be recognized
app.use(cookieParser());

const { appRoutes } = require("./main_routes"); //This is the file for the whole part of your Routes
const { validateToken } = require("../JWT/controller/c_jwt");

//register all routes
appRoutes.forEach((route) => {
    app[route.method](route.path, route.action);
});


// listening
app.listen(process.env.APP_PORT, function () {
    console.log("LISTENING ON \x1b[4m%s\x1b[0m", `http://localhost:${process.env.APP_PORT}`);
});