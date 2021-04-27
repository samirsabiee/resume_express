const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mediaSchema = new Schema({
    fieldname: {type: String, required: true},
    originalname: {type: String, required: true},
    encoding: {type: String, required: true},
    mimetype: {type: String, required: true},
    destination: {type: String, required: true},
    filename: {type: String, required: true},
    path: {type: String, required: true},
    size: {type: Number, required: true}
})

module.exports = mongoose.model('Media', mediaSchema, 'media')