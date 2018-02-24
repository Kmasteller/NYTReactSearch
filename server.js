const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to the Mongo DB or localhost
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytreactdb";

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

// Import the Article model
const Article = require('./Models/Article.js');

// Import Routes
require("./routes/apiRoutes")(app);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);

  db.on('error',function(err){
    console.log('Mongoose Error',err);
  });
  
  db.once('open', function(){
    console.log("Mongoose connection is successful");
  });
});
