const mongoose = require('mongoose');

const getInTouchSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const GetInTouch = mongoose.model('GetInTouch', getInTouchSchema);

module.exports = GetInTouch;
