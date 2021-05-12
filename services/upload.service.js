const multer = require('multer')
const path = require('path')
const articleWithoutImagesValidation = require('../validation/articleWithoutImages.validate')
const sampleWithoutImagesValidation = require('../validation/sampleWithoutImages.validate')
const imageValidation = require('../validation/image.validate')

class UploadService {
    constructor(directory, fieldName, multiple = false) {
        this.directory = directory
        this.fieldName = fieldName
        this.multiple = multiple
    }

    storage() {
        return multer.diskStorage({
            destination: `./uploads/${this.directory}`,
            filename: function (req, file, cb) {
                cb(null, file.originalname.split('.')[0] + '-' + Date.now() + path.extname(file.originalname))
            }
        })
    }

    async inputInfoValidate(info) {
        switch (this.directory) {
            case 'articles':
                return await articleWithoutImagesValidation.validateAsync(info)
            case 'samples':
                info.technologies = info.technologies.split(',')
                return await sampleWithoutImagesValidation.validateAsync(info)
        }
    }

    upload() {
        if (!this.multiple) return multer(this.multerImageOption(this.directory)).single(this.fieldName)
        else return multer(this.multerImageOption(this.directory)).array(this.fieldName)
    }

    multerImageOption() {
        return {
            storage: this.storage(this.directory),
            limits: {fileSize: process.env.MAX_IMAGE_FILE_SIZE},
            fileFilter: async (req, file, cb) => {
                try {
                    await this.inputInfoValidate(req.body)
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

module.exports = UploadService