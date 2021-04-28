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

    async findById(id) {
        try {
            return await mediaSchema.findById(id)
        } catch (e) {
            throw e
        }
    }

    async findPathById(id) {
        try {
            return await mediaSchema.findById(id, {path: 1})
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        return mediaSchema.deleteOne(id)
    }
}

module.exports = new Media()