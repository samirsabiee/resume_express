const articleModel = require('../databases/schema/article')
const articleValidator = require('../validation/article')

class Article {
    async create(article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleModel.create(article)
        } catch (e) {
            console.log(e)
        }
    }

    async updateById(id, article) {
        try {
            await articleValidator.validateAsync(article)
            return await articleModel.findByIdAndUpdate(id, article)
        } catch (e) {
            console.log(e)
        }
    }

    async deleteById(id) {
        return await articleModel.deleteOne(id)
    }

    async all() {
        return await articleModel.find()
    }

    async paginateArticle(page, limit) {
        return await articleModel.paginate({}, {page, limit})
    }
}

module.exports = new Article()