const Joi = require('joi')
const article = Joi.object().keys({
    title: Joi.string().min(3).max(100).required().label('title'),
    author: Joi.string().alphanum().min(3).max(30).required().label('author'),
    image: Joi.string().required().label('imgUrl'),
    summary: Joi.string().min(100).max(300).required().label('summary'),
    content: Joi.any().label('content')
})
module.exports = article