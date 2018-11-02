const router = require("express").Router();
var db = require("../models");
const questions = require( "../questions.json");



router.get("/api/allQuestions", function(req, res){
  db.Question.find({}).then(function (data){
    res.json(data);
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

router.get('/getAllQuestions',function(req,res){
  db.Question.find({}).then(function (data){
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

router.put('/addComment/:id',function(req,res){
  console.log(req.body)
  db.Question.findByIdAndUpdate(
    req.params.id
  ,
    {$push:  {comments: req.body}}
  )
    .then(function (data){
    res.json(data);
    })
})



module.exports = router;