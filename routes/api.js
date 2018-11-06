const router = require("express").Router();
var db = require("../models");
var equal = require('deep-strict-equal');
const questions = require( "../questions.json");
const bcrypt = require('bcrypt')


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
  console.log('hit')
  questions.forEach(element=> {
    db.Question.create(element).then(function(data){
      res.json(data);
    });
  });
  
});

router.get('/test',function(req,res){
  res.send(true)
})

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

  router.post("/post", function(req, res) {
    
    eval(`{${req.body.function}}`)
    res.send(Test([4,5,3,6,4]))
  
    
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


router.post("/submit", (req, res) => {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
    admin: true
  }

  db.User.create(userData, function (error, user) {
    console.log(error);
    if (error) {
      return res.status(404).json(error);
    } else {
      req.session.userId = user._id;
      res.status(200).json(user);
      console.log(req.session)
      // return res.redirect('/profile');
    }
  });
});

router.post("/login", (req, res) => {
  db.User.findOne({email: req.body.email},function(err,user){
   if (user !== null){
    bcrypt.compare(req.body.password,user.password,function(err,response){
      if (err){
        res.send(false)
      }
      else{
      if (response === true){
        var sendBack = {}
        sendBack.username = user.username
        sendBack.admin = user.admin
        res.send(sendBack)
      }
      else {
        res.send(false)
      }
    }
    })
  }
  else{
    res.send(false)
  }
  }).catch(response =>{
    res.send(false)
  })

  
})

router.get('/profile', function (req, res, next) {
  db.User.findOne({ email: req.body.email })
      console.log(req.body)
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.passwordConf, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
});

router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/login');
      }
    });
  }
});


module.exports = router;