const express = require("express");

const ClassController = require("../../controllers/classController");

const router = express.Router();

router.get("/", ClassController.getAllClass);
router.get("/:classId", ClassController.findClassById);
router.post("/", ClassController.createClass);
router.put("/:classId", ClassController.updateClassById);
router.delete("/:classId", ClassController.destroyClassmById);

module.exports = router;
