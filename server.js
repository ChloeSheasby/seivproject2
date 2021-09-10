const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const db = require("./config/db.config");

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Test." });
});

require("./routes/course.routes.js")(app);

// set port, listen for requests
app.listen(db.port, () => {
  console.log("Server is running on port 3000.");
});