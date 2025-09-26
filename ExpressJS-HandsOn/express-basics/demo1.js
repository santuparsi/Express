const express = require("express");
const app = express();
//define routes here.
app.get("/", (req, res) => {
  res.send("Hello Express");
});
let server = app.listen(5000, function () {
  console.log("Node server is running");
  const host = server.address().address;
  const port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});
