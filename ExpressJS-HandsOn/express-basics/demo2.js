//configure routes
const express = require("express");
const app = express();
//define routes here.
app.get("/", function (req, res) {
  res.send("Welcome to Express");
});
app.listen(5000, function () {
  console.log("Node server is running");
});
