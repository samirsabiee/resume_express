const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    images: {type: [{id: Schema.ObjectId, path: String}], required: true},
    summary: {type: String, required: true},
    content: {type: String, required: true}
}, {timestamps: true})

articleSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Article', articleSchema, 'article')