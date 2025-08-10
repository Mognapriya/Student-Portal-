const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  class: String,
  rollNumber: String,
  year: Number,
});

module.exports = mongoose.model('Profile', ProfileSchema);

