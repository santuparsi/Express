const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
//add middlewares to the app
app.use(bodyParser.json());
app.use("/", router);
router.get("/", (req, res) => {
  res.send("Hello World,This is default router");
});
router.get("/home", (req, res) => {
  res.send("Hello World,This is home router");
});
router.get("/profile", (req, res) => {
  res.send("Hello World,This is profile router");
});
router.get("/login", (req, res) => {
  res.send("Hello World,This is login router");
});
router.get("/logout", (req, res) => {
  res.send("Hello World,This is logout router");
});
app.listen(process.env.port || 3000);
console.log("Webserver is listening at port " + (process.env.port || 3000));
