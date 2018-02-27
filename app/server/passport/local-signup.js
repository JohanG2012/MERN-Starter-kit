const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const localSignupConfig = require('../configs/local-signup');

const register = (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    profile: {
      name: req.body.name.trim()
    }
  };

  const user = new User(userData);
  user.save(err => {
    if (err) return done(err);

    return done(null);
  });
};

module.exports = new PassportLocalStrategy(localSignupConfig, register);
