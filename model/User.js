const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 100,
    min: 5,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
