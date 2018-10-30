
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

var exports = module.exports = {};
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/api.js");
app.use(routes);

// Send every other request to the React app
<<<<<<< HEAD
app.get("/", (req, res) => {
=======

app.get("*", (req, res) => {
>>>>>>> 6562c45d0beaab6b227cc8c86bed91709646eb96
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/codingQuestions");

// app.get('/', function(req, res){
//   res.send('Hello World');
// });


var server =app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);      
});

exports.closeServer = function(){
  server.close();
};