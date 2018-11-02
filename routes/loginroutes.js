var express = require('express');
var router = express.Router();
var User = require('../models/user');


//POST route for updating data
// router.post('/login', function (req, res, next) {
// console.log("hello");
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
  console.log("hello");

  // confirm that user typed same password twice
  // if (req.body.password !== req.body.passwordConf) {
  //   var err = new Error('Passwords do not match.');
  //   res.status(400).json(err);
  //   // return next(err);
  // }

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
  
  // var myData = new User(req.body);
  // myData.save()
  // .then(item => {
  // res.send("item saved to database");
  // })
  // .catch(err => {
  // res.status(400).send("unable to save to database");
  // });
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
  // User.findById(req.session.userId)
  //   .exec(function (error, user) {
  //     if (error) {
  //       return next(error);
  //     } else {
  //       if (user === null) {
  //         var err = new Error('Not authorized! Go back!');
  //         err.status = 400;
  //         return next(err);
  //       } else {
  //         return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
  //       }
  //     }
  //   });
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