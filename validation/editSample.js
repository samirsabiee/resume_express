const Joi = require('joi')
const {exception} = require('./errors')
const sample = Joi.object().keys({
    id: Joi
        .string()
        .required()
        .error(errors => exception(errors, "id"))
        .label('ID'),
    title: Joi
        .string()
        .min(3)
        .max(150)
        .error(errors => exception(errors, "title", {min: 3, max: 100}))
        .label('title'),
    media: Joi
        .any()
        .error(errors => exception(errors, "media"))
        .label('media'),
    technologies: Joi
        .array()
        .items(Joi.string())
        .error(errors => exception(errors, "technologies"))
        .label('Technologies'),
    url: Joi
        .string()
        .error(errors => exception(errors, "url", {min: 5, max: 300}))
        .label('URL'),
    content: Joi
        .string()
        .min(20)
        .error(errors => exception(errors, "content", {min: 20}))
        .label('content')
}).unknown(true)
module.exports = sample