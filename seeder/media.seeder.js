const MediaFactory = require('../factory/media.factory')

class MediaSeeder extends MediaFactory {
    constructor(mediaCount) {
        super(mediaCount)
    }

    async seedMedia() {
        return this.createMedias()
    }
}

module.exports = MediaSeeder