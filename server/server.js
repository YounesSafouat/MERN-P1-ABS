const express = require("express");
const app = express();
app.use(express.json())
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/arkchat").then(() => {
  console.log("connected to mongoDB");
  app.listen(PORT, () => {
    console.log(`running on :  http://localhost:${PORT}`);
  });
});
const chatRoute = require("./routes/api/room");

app.use("/api", chatRoute);
