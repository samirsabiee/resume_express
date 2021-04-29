const Joi = require('joi')
const {exception} = require('./errors')
const article = Joi.object().keys({
    title: Joi
        .string()
        .min(3)
        .max(100)
        .required()
        .error(errors => exception(errors, "title", {min: 3, max: 100}))
        .label('title'),
    author: Joi
        .string()
        .min(3)
        .max(30)
        .required()
        .error(errors => exception(errors, "author", {max: 30, min: 3}))
        .label('author'),
    coverId: Joi
        .any()
        .required()
        .error(errors => exception(errors, "coverId"))
        .label('CoverId'),
    categoryId: Joi
        .any()
        .required()
        .error(errors => exception(errors, "category"))
        .label('categoryId'),
    summary: Joi
        .string()
        .min(5)
        .max(300)
        .required()
        .error(errors => exception(errors, "summary", {min: 5, max: 300}))
        .label('summary'),
    content: Joi
        .string()
        .min(20)
        .required()
        .error(errors => exception(errors, "content", {min: 20}))
        .label('content')
})
module.exports = article