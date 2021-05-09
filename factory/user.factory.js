const userSchema = require('../databases/schema/user')
const faker = require('faker')
const bcrypt = require('bcryptjs')
faker.locale = "fa"

class UserFactory {
    constructor(count) {
        this.count = count
    }

    async createUsers() {
        const result = await userSchema.deleteMany({})
        console.log('delete user collection result', result)
        let users = []
        for (let i = 0; i < this.count; i++) {
            const user = {
                name: faker.name.firstName(),
                mobile: faker.phone.phoneNumber('0936#######'),
                password: bcrypt.hashSync("123456", 10)
            }
            users.push(user)
            console.log(`${i} user pushed`)
        }

        return await userSchema.insertMany(users)
    }

}

module.exports = UserFactory