const User = require("../models/User");

exports.getAllstudents = async (req, res) => {
     const Allstudents = await User.find({duty:'trainee'})
     res.send(Allstudents);
   };