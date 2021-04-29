// require .env file
require('dotenv').config()
// import express
const express = require('express')
//import cors
const cors = require('cors')
//make express app
const app = express()
//CORS policy
app.use(cors())
//connect to database
require('./databases')
//using native body-parser for get form data
app.use(express.urlencoded({extended: true}))
//using native body-parser for get json data
app.use(express.json())
//require app config
require('./app')(app)
// import session
const session = require('express-session')
//session config
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: true}
}))
// import app route
require('./routes')(app)
//app port
const port = process.env.APP_PORT
//listen to port 3000 to run the app
app.listen(port, () => console.log(`server running on port ${port} ...`))
