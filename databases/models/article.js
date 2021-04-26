const mongoose = require('databases/index')
const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    image: String,
    summary: {type: String, required: true},
    content: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Article', articleSchema, 'article')