const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    passwordResetExpires: Date,

    profile: {
      name: String,
      age: Number,
      picture: String
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
