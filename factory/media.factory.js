const mediaSchema = require('../databases/schema/media.schema')
const faker = require('faker')
faker.locale = "fa"

class MediaFactory {
    constructor(count) {
        this.count = count
    }

    async createMedias() {
        let medias = []
        for (let i = 0; i < this.count; i++) {
            const media = {
                fieldname: 'cover',
                originalname: faker.system.commonFileName(),
                encoding: '7bit',
                mimetype: faker.system.mimeType(),
                destination: faker.system.directoryPath(),
                filename: faker.system.fileName(),
                path: `https://picsum.photos/600/400?random=${faker.datatype.number()}`,
                size: faker.datatype.number()
            }
            medias.push(media)
            console.log(`${i} media pushed`)
        }

        return mediaSchema.insertMany(medias)
    }

}

module.exports = MediaFactory