const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  classQuote: {
    type: String,
    unique: true,
    required: true,
  },
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a Coach model
    required: true,
  },
  // Add more class-related fields as needed
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
