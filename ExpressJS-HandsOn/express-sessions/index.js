const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const router = express.Router();
const app = express();
app.use(cookieParser());
app.use(session({ secret: "Shh,its a secret" }));

router.get("/", (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++; //read session
    res.send("You Visited the Page " + req.session.page_views + " times");
  } else {
    req.session.page_views = 1; //set session
    res.send("Welcome to the Page first time");
  }
});

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running at 3000");
});
