const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index4.html");
});
app.post("/process_post", urlencodedParser, function (req, res) {
  // Prepare output in JSON format
  let response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
const server = app.listen(8000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
