const router = require("express").Router();
const User = require("../models/User");
var db = require("../models");


router.get("/createQuestion", function(req, res) {
    db.User.find({username: req.body.username}).then(function(err, found){
        found.admin === true
        res.send(true)
    })
  });


