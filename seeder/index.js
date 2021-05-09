require('dotenv').config()
//connect to database
require("../databases")
const User = require('./user.seeder')
const Category = require('./category.seeder')

class Seeder {
    constructor() {
        this.init()
    }

    async init() {
        this.createCategory()
        const users = await this.createUsers()
        console.log(`${users.length} user inserted`)
    }

    async createUsers() {
        return await new User(10).seedUser()
    }

    async createCategory() {
        return await new Category(10).seedCategory()
    }
}

new Seeder()