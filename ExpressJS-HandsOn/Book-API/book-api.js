const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
//where we will keep the books
let books = [
  { id: 1, bookName: "Angular" },
  { id: 2, bookName: "React" },
];
//configure the  middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//get all books
app.get("/books", (req, res) => {
  res.json(books);
});
//get book by id
app.get("/book/:id", (req, res) => {
  const id = req.params.id; //reads route parameter value
  for (let book of books) {
    if (book.id == id) {
      res.json(book);
      return;
    }
  }
  //sending 404 when not found somethig.
  res.status(404).send("Book not found");
});
//add new-book
app.post("/book", (req, res) => {
  const book = req.body;
  console.log(book);
  books.push(book);
  res.send("Book is added to the database");
});
app.listen(port, () => console.log(`book Api is listening on port ${port}`));
