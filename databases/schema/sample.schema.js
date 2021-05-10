const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')
const sampleSchema = new Schema({
    title: {type: String, required: true},
    media: {type: [mongoose.Types.ObjectId], required: true, ref: "Media"},
    technologies: {type: [String], required: true},
    url: String,
    content: {type: String, required: true}
}, {timestamps: true})

sampleSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Sample', sampleSchema, 'sample')