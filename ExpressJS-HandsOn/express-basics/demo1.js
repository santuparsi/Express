const express = require("express");//import express module
const app = express();//create an express app
//define routes here.
//route for the root path
app.get("/", (req, res) => {
  res.send("Hello Express");
});
//start the server on port 5000
let server = app.listen(5000, function () {
  console.log("Node server is running");
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
