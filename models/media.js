const mediaSchema = require('../databases/schema/media')
const mediaValidation = require('../validation/media')

class Media {
    async create(media) {
        try {
            await mediaValidation.validateAsync(media)
            return await mediaSchema.create(media)
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        return mediaSchema.deleteOne(id)
    }
}

module.exports = new Media()