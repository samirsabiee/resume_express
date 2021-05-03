const sampleSchema = require('../databases/schema/sample')
const saveSampleValidation = require('../validation/saveSample')
const editSampleValidation = require('../validation/editSample')

class Sample {
    async create(sample) {
        try {
            await saveSampleValidation.validateAsync(sample)
            return await sampleSchema.create(sample)
        } catch (e) {
            throw e
        }
    }

    async updateById(sample) {
        try {
            await editSampleValidation.validateAsync(sample)
            return await sample.updateById(sample.id, sample)
        } catch (e) {
            throw e
        }
    }

    async findById(id) {
        try {
            return await sampleSchema.findById(id).populate('media').exec()
        } catch (e) {
            throw e
        }
    }

    async all() {
        try {
            return await sampleSchema.find().populate('media').exec()
        } catch (e) {
            throw e
        }
    }

    async allPaginate(page = 1, limit = 10) {
        try {
            return await sampleSchema.paginate({}, {page, limit, populate: 'media'})
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        try {
            return await sampleSchema.deleteOne(id)
        } catch (e) {
            throw e
        }
    }

}

module.exports = new Sample()