var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.post("/submit", (req, res) => {
  var userData = {
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    passwordConf: req.body.passwordConf,
  }

  User.create(userData, function (error, user) {
    console.log(error);
    if (error) {
      return res.status(404).json(error);
    } else {
      req.session.userId = user._id;
      res.status(200).json(user);
      // return res.redirect('/profile');
    }
  });
});

router.post("/login", (req, res) => {
  // console.log("hello");

  if (req.body.email && req.body.password) {
    console.log("Authenticating...");
    User.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        console.log("Error & no User");
        var err = new Error('Wrong email or password.');
        res.status(401).send(err);
        // return next(err);
      } else {
        console.log("Request email:", req.body.email);
        User.findOne({
          email: req.body.email
        }, (err, userData) => {
          if (!err) {
            req.session.id = userData.id;
            res.status(200).send(req.session.id);
          } else {
            console.log("Login failed...");
            res.status(400).json(err);
          }
        });
        // return res.redirect('/profile');
      }
    });
  } else {
    console.log("All fields not fulfilled...");
    var err = new Error('All fields required.');
    res.status(400).json(err);
    // return next(err);
  }  
})

// GET route after registering
router.get('/profile', function (req, res, next) {
  User.findOne({ email: req.body.email })
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

// GET for logout logout
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