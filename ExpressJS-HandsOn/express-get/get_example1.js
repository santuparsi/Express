var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "index1.html"); //renders index1.html as a response
});
app.get("/process_get", function (req, res) {
  response = {
    first_name: req.query.first_name, //reads first_name value in querystring
    last_name: req.query.last_name, //reads last_name value in querystring
  };
  console.log(response);
  res.end(JSON.stringify(response));
});
var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
