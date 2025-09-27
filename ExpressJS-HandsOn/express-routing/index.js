const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const homeRoutes = require("./routes/home");
app.use("/api", homeRoutes);// Mount home routes at root
app.use("/users", userRoutes);// Mount user routes at /users
//Other routes here(should be place last)
app.get("*", function (req, res) {
    res.send("Sorry, this is an invalid URL.");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});