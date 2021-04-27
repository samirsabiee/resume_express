const Joi = require('joi')
const media = Joi.object().keys({
    fieldname: Joi.string().required().label('FieldName'),
    originalname: Joi.string().required().label('OriginalName'),
    encoding: Joi.string().required().label('Encoding'),
    mimetype: Joi.string().required().label('MimeType'),
    destination: Joi.string().required().label('Destination'),
    filename: Joi.string().required().label('FileName'),
    path: Joi.string().required().label('Path'),
    size: Joi.string().required().label('Size')
})

module.exports = media