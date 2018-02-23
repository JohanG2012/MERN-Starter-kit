const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { promisify } = require('util');

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  profile: {
    name: String,
    age: Number,
    picture: String
  }
});

userSchema.methods.comparePassword = function compare(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

userSchema.pre('save', async function saveHook(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  try {
    const salt = await genSalt();
    const passwordHash = await hash(user.password, salt);
    user.password = passwordHash;
    return next();
  } catch (err) {
    return next(err);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
