const multer = require("multer");
const path = require("path");
const User = require("../models/User");
const passport = require("../config/passport");
const bcrypt = require("bcrypt");


// Registration Controller with file upload
const registerUser = async (req, res) => {
  const { username, email, password, role, duty } = req.body;
  console.log(req.file);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
      duty,
      profilePicture: req.file.filename,
    });
    res.json({logged : true});
  } catch (erreur) {
    const errors = handleError(erreur);
    logger.error(errors);
    res.render("errorPage", { errors });
  }
};

// Login Controller
const loginUser = (req, res) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      // Handle the error appropriately, e.g., by redirecting to an error page
      console.log(1);
      return res.redirect("/api/auth/login");
    }
    console.log(user);
    if (!user) {
      // Handle failed authentication, e.g., by redirecting to a login page with an error message
      console.log(2);
      return res.redirect("/api/auth/login");
    }
    // If authentication is successful, log the user in and redirect to the dashboard
    req.logIn(user, (err) => {
      if (err) {
        // Handle the error appropriately
        console.log(3);
        return res.redirect("/api/auth/login");
      }
      return res.json({logged : true});
    });
  })(req, res);
};

// Logout Controller
const logoutUser = (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout successful" });
};
const renderRegisterForm = (req, res) => {
  res.render("register"); // Assuming you have a 'register.ejs' view file
};

// Render the login form view
const renderLoginForm = (req, res) => {
  res.render("login"); // Assuming you have a 'login.ejs' view file
};

// Render the user profile view
const renderUserProfile = (req, res) => {
  res.render("profile"); // Assuming you have a 'profile.ejs' view file
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  renderRegisterForm,
  renderLoginForm,
  renderUserProfile,
};
