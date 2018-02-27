const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const localLoginConfig = require('../configs/local-login');

const authenticate = (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      return done(err);
    }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      if (err) {
        return done(err);
      }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id, // eslint-disable-line no-underscore-dangle
        username: user.profile.name
      };

      const token = jwt.sign(payload, process.env.jwtSecret);
      const data = {
        name: user.name
      };

      return done(null, token, data);
    });
  });
};

module.exports = new PassportLocalStrategy(localLoginConfig, authenticate);
