const express = require("express");
const bodyParser = require("bodyParser");
const mongoose  = require("mongoose");

const path = require("path");
const app = express();
//run locally and on deployment server
const PORT = process.env.PORT || 3001;

//express middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//server.js serve up static files from client build only in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//start the application!
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
