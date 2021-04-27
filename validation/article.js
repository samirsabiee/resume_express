const Joi = require('joi')
const {exception} = require('./errors')
const article = Joi.object().keys({
    title: Joi
        .string()
        .min(3)
        .max(100)
        .required()
        .error(errors => exception(errors, "title"))
        .label('title'),
    author: Joi
        .string()
        .min(3)
        .max(30)
        .required()
        .error(errors => exception(errors, "author", {min: 3, max: 30}))
        .label('author'),
    images: Joi
        .array().items(Joi.object({
            id: Joi
                .string()
                .required()
                .error(errors => exception(errors, "id"))
                .label('ID'),
            path: Joi
                .string()
                .required()
                .error(errors => exception(errors, "path"))
                .label('Path')
        })),
    summary: Joi
        .string()
        .min(5)
        .max(300)
        .required()
        .error(errors => exception(errors, "summary"))
        .label('summary'),
    content: Joi
        .any()
        .required()
        .error(errors => exception(errors, "content"))
        .label('content')
})
module.exports = article