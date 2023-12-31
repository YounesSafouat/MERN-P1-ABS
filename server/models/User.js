const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
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
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
