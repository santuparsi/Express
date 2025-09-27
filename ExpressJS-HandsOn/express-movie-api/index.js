const express = require("express");
const app = express();
const movies = require("./movies.js");//movies router
const bodyParser = require("body-parser");//body parser used to parse the body of the request
app.use(bodyParser.json());//support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));//support encoded bodies
app.use("/movies", movies);//mount the movies router on the /movies path
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
