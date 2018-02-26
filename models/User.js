const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  displayName: String,
  name: {
    familyName: String,
    givenName: String,
    middleName: String
  },
  email: String,
  avatarUrl: String,
  gender: String,
  language: String,
  facebookId: String
});

const User = mongoose.model('users', userSchema);

module.exports = User;
