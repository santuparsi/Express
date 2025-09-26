const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("express"));
//default url for the website
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html")); //__dirname it will resolve to your project folder
});
const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.log("Server listening on port :" + port);
