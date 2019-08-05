
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
var session = require('express-session');
var bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);

var exports = module.exports = {};
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connect to MongoDB
// mongoose.connect('mongodb://localhost/loginTryout');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

//use sessions for tracking logins
// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false,
//   store: new MongoStore({
//     mongooseConnection: db
//   })
// }));

// // parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const routes = require("./routes/api.js");
app.use(routes);



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
// Define any API routes before this runs
})

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