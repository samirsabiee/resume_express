const multer = require('multer')
const path = require('path')
const articleWithoutImagesValidation = require('../validation/articleWithoutImages')
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

    upload() {
        return multer(this.multerImageOption(this.directory)).single(this.fieldName)
    }

    multerImageOption() {
        return {
            storage: this.storage(this.directory),
            limits: {fileSize: process.env.MAX_IMAGE_FILE_SIZE},
            fileFilter: async function (req, file, cb) {
                try {
                    await articleWithoutImagesValidation.validateAsync(req.body)
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