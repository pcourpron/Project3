const router = require("express").Router();
const Article = require("../models/article");
var db = require("../models");

router.post("/save", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Article.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.get("/saved", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  db.articles.find({}, function(error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send json of the notes back to user
      // This will fire off the success function of the ajax request
      res.json(found);
    }
  })
});

module.exports = router;