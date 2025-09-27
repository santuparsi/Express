const express = require("express");//import express
const bodyParser = require("body-parser");//import body-parser
const cors = require("cors");//to allow cross-origin requests
//create express app
const app = express();
const port = 3000;
//where we will keep the books
let books = [
  { id: 1, bookName: "Angular" },
  { id: 2, bookName: "React" },
];
//configure the  middleware
app.use(cors());//to allow cross-origin requests
//urlencoded: extended false means values can be strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));//to parse the incoming requests with urlencoded payloads
app.use(bodyParser.json());//to parse the incoming requests with JSON payloads
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
  const book = req.body;//reading book from request body
  console.log(book);
  books.push(book);
  res.send("Book is added to the database");
});
app.listen(port, () => console.log(`book Api is listening on port ${port}`));
