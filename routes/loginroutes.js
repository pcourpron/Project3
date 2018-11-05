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

// router.post('/forgot', (req, res)=> {
//     let {email} = req.body;
//  User.findOne({email: email}, (err, userData) => {
//     if (!err) {
//       userData.passResetKey = shortid.generate();
//       userData.passKeyExpires = new.Data().getTime() + 20 * 60 * 1000
//       userData.save().then(err => {
//         if (!err) {
//             let transporter = nodemailer.createTransport({
//                 service: "gmail",
//                 port: 465,
//                 auth: {
//                   user: '',
//                   pass: ''
//                 }
//               });
//               let mailOptions = {
//                 subject: `NodeAuthTuts | Password reset`,
//                 to: email,
//                 from: `NodeAuthTuts <yourEmail@gmail.com>`,
//                 html:`
//                 <h1>Hi,<h1>
//                 <h2>Here is your password reset key</h2>
//                 <h2><code contenteditable="false" style="font-weight:200;font-size:1.5rem;padding:5px 10px; background: #EEEEEE; border:0">${passResetKey}</code></h4>
//                 <p>Please ignore if you didn't try to reset your password on our platform</p>
//               `;
//               };
//               try {
//                 transporter.sendMail(mailOptions, (error, response) => {
//                     if (error) {
//                       console.log("error:\n", error, "\n");
//                       res.status(500).send("could not send reset code");
//                     } else {
//                        console.log("email sent:\n", response);
//                        res.status(200).send("Reset Code Sent");
//                     }
//                   });
//                 } catch (error) {
//                   console.log(error);
//                   res.status(500).send("Could not send reset code");
//                 }
//               }
//             })
//           } else {
//             res.status(400).send('email is incorrect');
//           }
//         })
//       });
      
//       router.post('/resetpass', (req,res)=> {
//         let {resetKey, newPassword} = req.body;
//           User.find({passResetKey: resetKey}), (err, userData) => {
//             if (!err) {
//                   let now = new Date().getTime();
//               let keyExpiration = userDate.passKeyExpires;
//               if (keyExpiration > now) {
//                 userData.password = bcrypt.hashSync(newPassword, 5);
//                   userData.passKeyExpires = null;
//                   userData.keyExpiration = null;
//                   userData.save().then(err => {
//                   if (!err) {
//                     res.status(200).send("Password reset successful")
//                   } else {
//                     res.status(500).send("Error reseting yout password")
//                   }
//                 })
//               } else {
//                 res.status(400).send("Sorry, your password key expired. Please make request for new one");
//               }
//             } else {
//               res.status(400).send("Sorry, your password key is invalid");
//             } 
//           }
//       }) 

module.exports = router;