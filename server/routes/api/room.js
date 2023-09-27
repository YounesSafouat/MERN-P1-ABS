const express = require('express');
const { getAllRooms, createRoom, findRoomById, updateRoomById, destroyRoomById} = require('../../controllers/RoomController');
const router = express.Router()


//*Retrieve a list of available chat rooms.
router.get('/chat/rooms',getAllRooms)

//*Create a new chat room (requires authentication).
router.post('/chat/rooms',createRoom)
//*Get details of a specific chat room.
router.get('/chat/rooms/:roomId',findRoomById)

//*Update a chat room's settings (e.g., name, description) (requires authentication).exports.
router.put('/chat/rooms/:roomId',updateRoomById)
//*Delete a chat room (requires authentication).
router.delete('/chat/rooms/:roomId',destroyRoomById)






module.exports = router