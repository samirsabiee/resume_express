const mediaSchema = require('../databases/schema/media')
const mediaValidation = require('../validation/media')
const filesValidation = require('../validation/files')

class Media {
    async create(media) {
        try {
            await mediaValidation.validateAsync(media)
            return await mediaSchema.create(media)
        } catch (e) {
            throw e
        }
    }

    async createMany(files) {
        try {
            await filesValidation.validateAsync(files)
            return await mediaSchema.insertMany(files)
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

    async updateById(id, media) {
        try {
            await mediaValidation.validateAsync(media)
            return await mediaSchema.updateOne({_id: id}, {media})
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        return mediaSchema.deleteOne(id)
    }

    async findOneAndUpdate(media) {
        try {
            await mediaValidation.validateAsync(media)
            return await mediaSchema.findOneAndUpdate({_id: media.id}, media)
        } catch (e) {
            throw e
        }
    }
}

module.exports = new Media()