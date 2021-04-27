const Joi = require('joi')
const article = Joi.object().keys({
    title: Joi.string().min(3).max(100).required().label('title'),
    author: Joi.string().min(3).max(30).required().label('author'),
    images: Joi.array().items(Joi.object({
        id: Joi.string().required().label('ID'),
        path: Joi.string().required().label('Path')
    })),
    summary: Joi.string().min(5).max(300).required().label('summary'),
    content: Joi.any().label('content')
})
module.exports = article