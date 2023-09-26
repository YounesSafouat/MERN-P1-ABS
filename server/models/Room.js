const mongoose = require("mongoose");
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "the name is required"],
  },
  description: {
    type: String,
    maxLength: 3000,
  },
  members: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isPrivate : {
     type :Boolean,
     default : false
  }
});
const Room = mongoose.model('rooms',roomSchema)
module.exports = Room