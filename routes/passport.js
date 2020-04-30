
const express = require('express');
const router = express.Router();
const passport = require('passport');
// const bcrypt = require('bcryptjs');
const passport = require('passport');

// Load User model
const User = require('../models/user');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { username, password } = req.body;
  let errors = [];

  if (!name || !password) {
    errors.push({ msg: 'Please enter all fields' });
  }
  
  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      username,
      password
    });
  } else {
    User.findOne({ username: username }).then(user => {
      if (user) {
        errors.push({ msg: 'Username already exists' });
        res.render('register', {
            errors,
            username,
            password
        });
      } else {
        const newUser = new User({
            username,
            password
        });

        newUser.save(err => {
            if(err) {
                res.status(500).json({ message: { msgBody: 'An error has occured', msgError: true } })
            } else {
                res.status(201).json({ message: { msgBody: 'Account successfuly created', msgError: false } })
                console.log("success")
            }
        })

        // bcrypt.genSalt(10, (err, salt) => {
        //   bcrypt.hash(newUser.password, salt, (err, hash) => {
        //     if (err) throw err;
        //     newUser.password = hash;
        //     newUser
        //       .save()
        //       .then(user => {
        //         req.flash(
        //           'success_msg',
        //           'You are now registered and can log in'
        //         );
        //         res.redirect('/users/login');
        //       })
        //       .catch(err => console.log(err));
        //   });
        // });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
