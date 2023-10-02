const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePicture: String,
  role: {
    type: String,
    enum: ["owner", "admin", "user"],
    default: "user",
  },
  duty: {
    type: String,
    enum: ["coach", "trainee"],
    required: true,
  },
});

const Class = mongoose.model("Request", classSchema);

module.exports = Class;
