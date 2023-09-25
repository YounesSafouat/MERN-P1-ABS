const express = require('express');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

const chatRoute = require('./routes/api/chat')
app.use('/',chatRoute)
app.listen(PORT ,()=>{
     console.log(`running on :  http://localhost:${PORT}`);
})