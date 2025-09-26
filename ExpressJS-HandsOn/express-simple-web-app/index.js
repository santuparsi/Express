const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Simple web appliction is up!!");
});
app.listen(8001, () => {
  console.log("simple web app is running at 8001");
});
