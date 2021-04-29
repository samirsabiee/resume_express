const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    coverId: {type: mongoose.Types.ObjectId, required: true, ref: "Media"},
    categoryId: {type: mongoose.Types.ObjectId, required: true, ref: "Category"},
    summary: {type: String, required: true, trim: true},
    content: {type: String, required: true}
}, {timestamps: true})

articleSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Article', articleSchema, 'article')