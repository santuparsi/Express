const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.get("/", (req, res) => {
  //set value in cookie
  res.cookie("uname", "Raj").send("Cookie Set");
  //set expiry time type-1
  res.cookie("name", "san", { expires: 1000 + Date.now });
  //set expiry time type-2
  res.cookie("flag", "admin", { maxAge: 1000 });
  console.log(req.cookies);
});
app.get("/read-cookies", (req, res) => {
  res.send("Read Cookies");
  res.send(req.cookies);
});
app.get("/clear-cookie", (req, res) => {
  res.clearCookie("uname");
  res.send("Cookie uname is cleared");
});
app.use(cookieParser());
app.listen(3000, () => {
  console.log(`server is running at ${3000}`);
});
