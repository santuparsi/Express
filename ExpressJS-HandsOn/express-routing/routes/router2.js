const express = require("express");
const router = express.Router();
const app = express();
app.use("/", router); //add router middleware to the app
//route with one parameter
router.get("/:id", (req, res) => {
  res.send("The id you specified is " + req.params.id);
});
//route with two paramters
router.get("/city/:id/:name", (req, res) => {
  res.send(`id:${req.params.id} name:${req.params.name}`);
});
//Pattern Matched Routes
router.get("/city/:id([0-9]{5})", (req, res) => {
  res.send(`id:${req.params.id}`);
});



