const express = require("express");
const authController = require("../../controllers/authcontroller");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const moment = require("moment");

const currentTime = moment()
  .format("YYYY-MM-DD")
  .replace(" ", "")
  .replace("-", "")
  .replace(":", "");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      currentTime.toString() +
        Math.floor(Math.random() * 10) +
        1 +
        path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post(
  "/register",
  upload.single("profilePicture"),
  authController.registerUser
);

router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);
router.get("/register", authController.renderRegisterForm);

router.get("/login", authController.renderLoginForm);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login"); // Redirect to the login page if not authenticated
}
module.exports = router;
