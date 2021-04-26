const mongoose = require('databases/index')
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    image: String,
    summary: {type: String, required: true},
    content: {type: String, required: true}
}, {timestamps: true})

articleSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Article', articleSchema, 'article')