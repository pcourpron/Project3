const router = require("express").Router();
const User = require("../models/User");
var db = require("../models");

router.post("/createUser", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  User.create(req.body)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.put("/updatePassword", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  db.User.update({username: req.body.username}, {$set:{password : req.body.password}}, function(error, found) {
    
    if (err) {
        res.send(err)
    }
    else {
        res.send(true)
    }
  })
});


router.get("/login",function(req,res){
    db.User.find({username : req.body.user}).then(function(error,found){
        if (error){
            res.send(error)
        }
        if (req.body.password === found.password){
            res.send(found.auth_key)
        }
    })
})

router.get('/checkAuth',function(req,res){
    db.User.find({username : req.body.user}).then(function(error,found){
        if (error){
            res.send(error)
        }
        if (req.body.auth_key=== found.auth_key){
            res.send(true)
        }
        else{
            res.send(false)
        }
    })
})


module.exports = router;