require("dotenv").config(); //to import the contents on env file
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = new express();
app.use(cors());
app.use(express.json()); //accepts data in json format
const routes = require("./routes/routes");
app.use("/api", routes); //all the endpoints are start from /api
app.listen(3000, () => {
  console.log(`server started at ${3000}`);
});
