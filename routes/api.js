const router = require("express").Router();
const Article = require("../models/article");

var db = require("../models");
const questions = require( "../questions.json");



router.get("/api/allQuestions", function(req, res){
  db.Question.find({}).then(function (data){
    res.json(data);
  });
});

router.get("/saved", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Article.find({}, function(error, found) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send json of the notes back to user
      // This will fire off the success function of the ajax request
      res.json(found);
    }
  });
});

router.get("/api/oneQuestion/:id", function(req, res){
  db.Question.findOne({ _id: req.params.id }).then(function (data){
    res.json(data);
  });
});

router.post("/api/createQuestion", function(req, res){
  db.Question.create(req.body).then(function (data){
    res.json(data);
  }).catch(function(err){
    res.send(err)
  });
});

router.get("/api/importQuestions", function(req,res){
  questions.forEach(element=> {
    db.Question.create(element).then(function(data){
      res.json(data);
    });
  });
  
});

router.put("/api/userQuestionScores/:id", function(req, res){
  db.Question.findByIdAndUpdate(
    req.params.id
  ,
    {$push: {scores: req.body.scores, codeTime: req.body.codeTime, runTime: req.body.runTime, bigO: req.body.bigO}}
  )
    .then(function (data){
    res.json(data);
    })
  
});

router.get('/getAllCoding/:type',function(req,res){
  db.Question.find({questionType: req.params.type}).then(function (data){
    res.json(data);
  });
})


router.get('/getComments/:id',function(req,res){
  db.Question.findById({_id:req.params.id}).then(function(data){
    res.json(data)
  })
})

router.put('/addRunTime/:id',function(req,res){
  db.Question.findByIdAndUpdate(
    req.params.id
  ,
    {$push:  {runTime: req.body.runTime}}
  )
    .then(function (data){
    res.json(data);
    })
  
})

module.exports = router;