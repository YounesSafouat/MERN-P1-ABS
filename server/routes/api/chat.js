const express = require('express');
const { index } = require('../../controllers/chatController');
const router = express.Router()
router.get('/test',index)
module.exports = router