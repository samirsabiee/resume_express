const articleSchema = require('../databases/schema/article.schema')
const faker = require('faker')
faker.locale = "fa"

class ArticleFactory {
    constructor(categories, users, files, countPerUser) {
        this.categories = categories;
        this.users = users;
        this.files = files
        this.countPerUser = countPerUser;

    }

    async createArticles() {
        let articles = []
        let articleCount = this.users.length * this.countPerUser
        for (let i = 0; i < articleCount; i++) {
            const article = {
                title: faker.name.title(),
                author: this.getRandomItem(this.users).name,
                coverId: this.getRandomItem(this.files)._id,
                categoryId: this.getRandomItem(this.categories)._id,
                summary: faker.lorem.paragraph(),
                content: faker.lorem.paragraphs()
            }
            articles.push(article)
            console.log(`${i} article pushed`)
        }

        return articleSchema.insertMany(articles)
    }

    getRandomItem(array) {
        return array[faker.datatype.number(array.length - 1)]
    }
}

module.exports = ArticleFactory