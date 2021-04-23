const express = require('express')
const path = require('path')
module.exports = (app) => {
    //make public directory static for assets files
    app.use(express.static(path.join(__dirname, 'public')))
    //setting ejs template engine
    app.set('view engine', 'ejs')
    //make views directory accessAble for views
    app.set('views', path.join(__dirname, 'views'))
}
