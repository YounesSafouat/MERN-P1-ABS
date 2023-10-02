const mongoose = require("mongoose");
const Class = require("../models/Class");
//*Retrieve a list of available chat rooms.
exports.getAllClass = async (req, res) => {
  const Allclass = await Class.find({}).populate('coach');
  res.send(Allclass);
};

//*Create a new chat Class (requires authentication).

exports.createClass = async (req, res) => {
  try {
    const { className, classQuote, coach } = req.body;
    if (className && classQuote && coach) {
      const newClass = await Class.create({
        className,
        classQuote,
        coach,
      });
      console.log("new Class", newClass);
      res.send(`Class with the name ${newClass._id} is created 😁`);
    } else {
      res.send(" required 😃");
    }
  } catch (err) {
    console.log(err.message);
  }
};
//*Get details of a specific chat Class.
exports.findClassById = async (req, res) => {
  try {
    const ClassId = req.params.classId;
    const check = mongoose.Types.ObjectId.isValid(ClassId);
    if (check) {
      const Findclass = await Class.findById(ClassId).populate('coach');
      if (Findclass) {
        res.send(Findclass);
      } else {
        res.send("not found 😣");
      }
    } else {
      res.send("not an objectID 😑");
    }
  } catch (err) {
    console.log(err.message);
  }
};

//*Update Class's settings (e.g., name, description) (requires authentication).exports.
exports.updateClassById = async (req, res) => {
  try {
    const ClassId = req.params.classId;
    const { className, classQuote, coach } = req.body;
    const check = mongoose.Types.ObjectId.isValid(ClassId);
    if (check) {
      const updatedClass = await Class.findByIdAndUpdate(ClassId, {
          className,
          classQuote,
          coach,
      });
      res.send(`updated the room with the name : ${updatedClass.className}`);
    } else {
      res.send("not an objectID 😑");
    }
  } catch (err) {
    console.log(err.message);
  }
};
//*Delete a Class (requires authentication).
exports.destroyClassmById = async (req, res) => {
  try {
    const ClassId = req.params.classId;
    const check = mongoose.Types.ObjectId.isValid(ClassId);
    if (check) {
      const deletedClass = await Class.findByIdAndDelete(ClassId);
      if (deletedClass) {
        res.send(`you deleted the room :  ${deletedClass.className} 😥`);
      } else {
        res.send("not found 😣");
      }
    } else {
      res.send("not an objectID 😑");
    }
  } catch (err) {
    console.log(err.message);
  }
};
