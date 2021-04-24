// require .env file
require('dotenv').config()
// import express
const express = require('express')
const app = express()
//using native body-parser for get form data
app.use(express.urlencoded({extended: true}))
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
