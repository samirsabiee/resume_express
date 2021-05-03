const multer = require('multer')
const path = require('path')
const articleWithoutImagesValidation = require('../validation/articleWithoutImages')
const sampleWithoutImagesValidation = require('../validation/sampleWithoutImages')
const imageValidation = require('../validation/image')

class Upload {
    constructor(directory, fieldName) {
        this.directory = directory
        this.fieldName = fieldName
    }

    storage() {
        return multer.diskStorage({
            destination: `./uploads/${this.directory}`,
            filename: function (req, file, cb) {
                cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname))
            }
        })
    }

    async fileInfoValidate(info) {
        switch (this.directory) {
            case 'articles':
                return await articleWithoutImagesValidation.validateAsync(info)
            case 'samples':
                return await sampleWithoutImagesValidation.validateAsync(info)
        }
    }

    upload() {
        return multer(this.multerImageOption(this.directory)).single(this.fieldName)
    }

    multerImageOption() {
        return {
            storage: this.storage(this.directory),
            limits: {fileSize: process.env.MAX_IMAGE_FILE_SIZE},
            fileFilter: async (req, file, cb) => {
                try {
                    await this.fileInfoValidate(req.body)
                    await imageValidation.validateAsync(file)
                    cb(null, true)
                } catch (e) {
                    cb(e)
                }
            }
        }
    }

    uploadImages() {
        return this.upload()
    }
}

module.exports = Upload