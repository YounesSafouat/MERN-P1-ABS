const express = require("express");
const session = require("express-session");
const passport = require("passport");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("./config/passport");
const cors = require("cors");
const bodyParser = require("body-parser");
// Initialize Express app
const app = express();
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize Passport
app.use(passport.initialize());

// Enable session-based authentication with Passport
app.use(
  session({
    secret: "your-secret-key", // Replace with your secret key
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());
app.use(cors());
app.set("view engine", "ejs");
// Load environment variables
dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/MERN_P1")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

const authRoutes = require("./routes/api/auth");
app.use("/api/auth", authRoutes);
const classRoutes = require('./routes/api/class'); 
app.use('/api/class', classRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on :  http://localhost:${PORT}`);
});
