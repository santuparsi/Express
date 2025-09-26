const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();
//add middleware
//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
//Require the router we defined in movies.js
const movies = require("./movies.js");
app.use("/movies", movies);
app.listen(3000);
