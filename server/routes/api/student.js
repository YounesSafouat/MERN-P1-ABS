const express = require("express");

const studentController = require("../../controllers/studentController");

const router = express.Router();

router.get("/", studentController.getAllstudents);


module.exports = router;
