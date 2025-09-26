require("dotenv").config();
const express = require("express");
const router = require("./routes/routes");
const cors = require("cors");
const mongoose = require("mongoose");
const connectionString = process.env.Database_Path;
mongoose.connect(connectionString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", router);
app.listen(3001, () => {
  console.log(`server is running at ${3001}`);
});
