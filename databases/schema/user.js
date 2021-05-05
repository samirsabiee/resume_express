const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {type: String, trim: true},
    mobile: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true, trim: true},
})

module.exports = mongoose.model("User", userSchema, 'user')
