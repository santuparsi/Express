let express = require("express");
let app = express(); //application middleware
let router = express.Router(); //router middleware
app.use("/", router); //add middleware to the app
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
  res.send("Hello World GoodMorning,This is login router");
});
router.get("/logout", (req, res) => {
  res.send("Hello World,This is logout router");
});
