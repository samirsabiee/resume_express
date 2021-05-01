const articleSchema = require('../databases/schema/article')
const saveArticleValidator = require('../validation/saveArticle')
const editArticleValidator = require('../validation/editArticle')

class Article {
    async create(article) {
        try {
            await saveArticleValidator.validateAsync(article)
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
            await saveArticleValidator.validateAsync(article)
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

    async paginateArticle(page = 1, limit = 10) {
        return await articleSchema.paginate({}, {page, limit, populate: ["coverId", "categoryId"]})
    }

    async findOneAndUpdate(article) {
        try {
            await editArticleValidator.validateAsync(article)
            return await articleSchema.findOneAndUpdate({_id: article.id}, article)
        } catch (e) {
            throw e
        }
    }
}

module.exports = new Article()