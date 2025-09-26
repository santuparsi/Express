const expess = require("express");
const app = expess();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/fruits", (req, res) => {
  res.send(["Orange", "Banana", "Apple"]);
});
app.listen(process.env.port || 3000);
console.log("Webserver is listening at port " + (process.env.port || 3000));
