const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the User collection
  },
  chatRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room', // Reference the ChatRoom collection
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  readBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference the User collection
    },
  ],
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
