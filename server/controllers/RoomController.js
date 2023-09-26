const Room = require("../models/Room");

//*Retrieve a list of available chat rooms.
exports.index = async (req, res) => {
  const rooms = await Room.find({});
  res.send(rooms);
};
//*rendering the create view

exports.create = (req, res) => {};
//*Create a new chat room (requires authentication).

exports.store = async (req, res) => {
  try {
    const { name, description, members, isPrivate } = req.body;
    const newRoom = await Room.create({
      name,
      description,
      members,
      isPrivate,
    });
    res.send("created");
  } catch (err) {
    console.log(err.message);
  }
};
//*Get details of a specific chat room.
exports.find = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const room = await Room.findById(roomId);
    res.send(room);
  } catch (err) {
    console.log(err.message);
  }
};
//*rendering the create view

exports.edit = (req, res) => {};

//*Update a chat room's settings (e.g., name, description) (requires authentication).exports.
exports.update = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const { name, description, members, isPrivate } = req.body;
    const updatedroom = await Room.findByIdAndUpdate(roomId, {
      name,
      description,
      members,
      isPrivate,
    });
    res.send('updated')
  } catch (err) {
    console.log(err.message);
  }
};
//*Delete a chat room (requires authentication).
exports.destroy = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const deletedRoom = await Room.findByIdAndDelete(roomId);
    res.send('deleted')
  } catch (err) {
    console.log(err.message);
  }
};
