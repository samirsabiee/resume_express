const articleSchema = require('../databases/schema/article')
const articleValidator = require('../validation/article')

class Article {
    async create(article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleSchema.create(article)
        } catch (e) {
            throw e
        }
    }

    async findById(id) {
        try {
            return await articleSchema.findById(id).populate("coverId").exec()
        } catch (e) {
            throw e
        }
    }

    async updateById(id, article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleSchema.findByIdAndUpdate(id, article, {new: true})
        } catch (e) {
            throw e
        }
    }

    async deleteById(id) {
        try {
            return await articleSchema.deleteOne(id)
        } catch (e) {
            throw e
        }
    }

    async all() {
        try {
            return await articleSchema.find()
        } catch (e) {
            throw e
        }
    }

    async counts() {
        try {
            return await articleSchema.countDocuments()
        } catch (e) {
            throw e
        }
    }

    async paginateArticle(page, limit) {
        return await articleSchema.paginate({}, {page, limit, populate: ["coverId", "categoryId"]})
    }
}

module.exports = new Article()