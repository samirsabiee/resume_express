const Joi = require('joi')
const {exception} = require('./errors')
const sample = Joi.object().keys({
    title: Joi
        .string()
        .min(3)
        .max(150)
        .required()
        .error(errors => exception(errors, "title", {min: 3, max: 100}))
        .label('title'),
    technologies: Joi
        .array()
        .items(Joi.string())
        .required()
        .error(errors => exception(errors, "technologies"))
        .label('Technologies'),
    url: Joi
        .string()
        .required()
        .error(errors => exception(errors, "url", {min: 5, max: 300}))
        .label('URL'),
    content: Joi
        .string()
        .min(20)
        .required()
        .error(errors => exception(errors, "content", {min: 20}))
        .label('content')
}).unknown(true)
module.exports = sample