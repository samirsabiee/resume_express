const Joi = require('joi')
const file = Joi.object().keys({
    fieldname: Joi.string().required().label('FieldName'),
    originalname: Joi.string().required().label('OriginalName'),
    encoding: Joi.string().required().label('Encoding'),
    mimetype: Joi.string().valid('image/jpeg', 'image/png', 'image/svg+xml').label('MimeType'),
    destination: joi.string().required().label('Destination'),
    filename: joi.string().required().label('FileName'),
    path: joi.string().required().label('Path'),
    size: Joi.number().integer().max(5242880).required().label('Size')
})
module.exports = file