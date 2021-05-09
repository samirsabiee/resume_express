const ArticleFactory = require('../factory/article.factory')

class ArticleSeeder extends ArticleFactory {
    constructor(categories, users, files, countPerUser) {
        super(categories, users, files, countPerUser);
    }

    async seedArticle() {
        return this.createArticles()
    }
}

module.exports = ArticleSeeder