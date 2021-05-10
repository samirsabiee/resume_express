require('dotenv').config()
//connect to database
require("../databases")

/*========================== SCHEMAS ==========================*/
const userSchema = require('../databases/schema/user.schema')
const categorySchema = require('../databases/schema/category.schema')
const mediaSchema = require('../databases/schema/media.schema')
const articleSchema = require('../databases/schema/article.schema')
/*========================== SCHEMAS ==========================*/
const User = require('./user.seeder')
const Category = require('./category.seeder')
const Media = require('./media.seeder')
const Article = require('./article.seeder')

class Seeder {
    constructor() {
        this.init()
    }

    async init() {
        await this.clearDB()
        const categories = await this.createCategory()
        console.log(`${categories.length} category inserted`)
        const users = await this.createUsers()
        console.log(`${users.length} user inserted`)
        const files = await this.createMedias()
        console.log(`${files.length} media inserted`)
        const articles = await this.createArticles(categories, users, files)
        console.log(`${articles.length} article inserted`)
    }

    createCategory() {
        return new Category(10).seedCategory()
    }

    createUsers() {
        return new User(10).seedUser()
    }

    createMedias() {
        return new Media(10).seedMedia()
    }

    createArticles(categories, users, files) {
        return new Article(categories, users, files, 2).seedArticle()
    }


    async clearDB() {
        let result = await userSchema.deleteMany({})
        console.log('delete user collection result', result)
        result = await categorySchema.deleteMany({})
        console.log('delete category collection result', result)
        result = await mediaSchema.deleteMany({})
        console.log('delete media collection result', result)
        result = await articleSchema.deleteMany({})
        console.log('delete article collection result', result)
    }
}

new Seeder()