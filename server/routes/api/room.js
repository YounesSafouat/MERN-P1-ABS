const express = require('express');
const { index, store, find, update, destroy, create, edit } = require('../../controllers/RoomController');
const router = express.Router()
router.get('/chat/rooms',index)
router.get('/chat/rooms/create',create)
router.post('/chat/rooms',store)
router.get('/chat/rooms/:roomId',find)
router.get('/chat/rooms/update',edit)
router.put('/chat/rooms/:roomId',update)
router.delete('/chat/rooms/:roomId',destroy)
module.exports = router