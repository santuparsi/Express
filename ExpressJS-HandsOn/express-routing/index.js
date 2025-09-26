const express = require("express");
const app = express();
const router = require("./router1.js");
app.use("/things", router);
app.listen(process.env.port || 3000);
console.log("Webserver is listening at port " + (process.env.port || 3000));
