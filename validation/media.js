const Joi = require('joi')
const {exception} = require('./errors')
const media = Joi.object().keys({
    fieldname: Joi
        .string()
        .required()
        .error(errors => exception(errors, "fieldname"))
        .label('FieldName'),
    originalname: Joi
        .string()
        .required()
        .error(errors => exception(errors, "originalname"))
        .label('OriginalName'),
    encoding: Joi
        .string()
        .required()
        .error(errors => exception(errors, "encoding"))
        .label('Encoding'),
    mimetype: Joi
        .string()
        .required()
        .error(errors => exception(errors, "mimetype"))
        .label('MimeType'),
    destination: Joi
        .string()
        .required()
        .error(errors => exception(errors, "destination"))
        .label('Destination'),
    filename: Joi
        .string()
        .required()
        .error(errors => exception(errors, "filename"))
        .label('FileName'),
    path: Joi
        .string()
        .required()
        .error(errors => exception(errors, "path"))
        .label('Path'),
    size: Joi
        .number()
        .required()
        .error(errors => exception(errors, "size"))
        .label('Size')
})

module.exports = media