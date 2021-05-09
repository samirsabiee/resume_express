// require .env file
require("dotenv").config()

// import express
const express = require("express")

//require passport
const passport = require('passport')

//import cors
const cors = require("cors")

//make express app
const app = express()

//app port
const port = process.env.APP_PORT

//passport config
require('./config/passport')(passport)

//connect to database
require("./databases")

//CORS policy
app.use(cors())

//import passport flash message
const flash = require('connect-flash')

// require session
const session = require('express-session')

//require app config
require("./app")(app)

//using native body-parser for get form data
app.use(express.urlencoded({extended: true}))

//using native body-parser for get json data
app.use(express.json());

//session config
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
)

//import passport config
app.use(passport.initialize())
app.use(passport.session())

// Connect flash
app.use(flash())

// Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    res.locals.error = req.flash('error')
    next()
});

// import app route
require("./routes")(app)


//listen to port 3000 to run the app
app.listen(port, () =>
    console.log(`server running on port http://localhost:${port} ...`)
)
