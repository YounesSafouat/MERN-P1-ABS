const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              errors: { "email or password": "is invalid" },
            });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user.id); 
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((err, user) => {
    done(err, user);
  });
});

module.exports = passport;
