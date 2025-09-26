const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Welcome to Express!");
});
app.get("/help", function (req, res) {
  res.send("How can I help You?");
});
const server = app.listen(8000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
