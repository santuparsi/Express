const express = require("express");
const router = express.Router();
var movies = [
  { id: 101, name: "Fight Club", year: 1999, rating: 8.1 },
  { id: 102, name: "Inception", year: 2010, rating: 8.7 },
  { id: 103, name: "The Dark Knight", year: 2008, rating: 9 },
  { id: 104, name: "12 Angry Men", year: 1957, rating: 8.9 },
];
router.get("/", (req, res) => {
  res.json(movies);
});
router.get("/:id", (req, res) => {
  let movie = movies.find((m) => m.id == req.params.id);
  console.log(movie);
  if (movie != undefined) {
    res.json(movie);
  } else {
    res.status(404);
    console.log("Movie not found");
    res.json({ message: "Not Found" });
  }
});
router.post("/", (req, res) => {
  let movie = {
    id: req.body.id,
    name: req.body.name,
    year: req.body.year,
    rating: req.body.rating,
  };
  console.log(movie);
  movies.push(movie);
  res.send("Movie Added");
});
module.exports = router;
