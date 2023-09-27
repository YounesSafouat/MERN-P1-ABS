const Room = require("../models/Room");
const mongoose = require("mongoose");
//*Retrieve a list of available chat rooms.
exports.getAllRooms = async (req, res) => {
  const rooms = await Room.find({});
  res.send(rooms);
};

//*Create a new chat room (requires authentication).

exports.createRoom = async (req, res) => {
  try {
    const { name, description, members, isPrivate } = req.body;
    if (name && members) {
      const newRoom = await Room.create({
        name,
        description,
        members,
        isPrivate,
      });
      console.log("new room", newRoom);
      res.send(`room with the name ${newRoom._id} is created 😁`);
    } else {
      res.send("name and member are required 😃");
    }
  } catch (err) {
    console.log(err.message);
  }
};
//*Get details of a specific chat room.
exports.findRoomById = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const check = mongoose.Types.ObjectId.isValid(roomId);
    if (check) {
      const room = await Room.findById(roomId);
      if (room) {
        res.send(room);
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

//*Update a chat room's settings (e.g., name, description) (requires authentication).exports.
exports.updateRoomById = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const { name, description, members, isPrivate } = req.body;
    const check = mongoose.Types.ObjectId.isValid(roomId);
    if (check) {
      const updatedroom = await Room.findByIdAndUpdate(roomId, {
        name,
        description,
        members,
        isPrivate,
      });
      res.send(`updated the room with the name : ${updatedroom.name}`);
    } else {
      res.send("not an objectID 😑");
    }
  } catch (err) {
    console.log(err.message);
  }
};
//*Delete a chat room (requires authentication).
exports.destroyRoomById = async (req, res) => {
  try {
    const roomId = req.params.roomId;
    const check = mongoose.Types.ObjectId.isValid(roomId);
    if (check) {
      const deletedRoom = await Room.findByIdAndDelete(roomId);
      if (deletedRoom) {
        res.send(`you deleted the room :  ${deletedRoom.name} 😥`);
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
