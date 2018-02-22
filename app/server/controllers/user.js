const User = require('../models/User');

const find = (req, res) => {
  User.findOne({ username: req.params.username }, (error, result) => {
    res.json(result);
  });
};

const create = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save(error => {
    console.log(error);
  });

  res.json('User created');
};

module.exports = {
  find,
  create
};
