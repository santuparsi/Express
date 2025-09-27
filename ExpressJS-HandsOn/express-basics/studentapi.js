const { json } = require("body-parser");
const express = require("express");
const app = express();
app.use(app.json());//to parse json data
//mock student data
let students = [
  { id: 1, name: "rohan", age: 10 },
  { id: 2, name: "karan", age: 11 },
  { id: 3, name: "jeson", age: 12 },
];
app.get("/list", (req, res) => {
  res.send(students);
});
app.get("/list/:id", (req, res) => {
  let id = req.params.id;//dynamic parameter from url 
  console.log(id);
  let item = students.find((s) => s.id == id);
  if (item != null)
    res.send(item);
  else
    res.status(404).send("Student Not Found");
});
const server = app.listen(9999, () => {
  console.log("Server is running at " + server.address().port);
});
