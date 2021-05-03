const sampleModel = require('../../models/sample')
const mediaModel = require('../../models/media')
const messages = require('../../services/messages')
const upload = require('../../services/upload')
module.exports.showAddSampleForm = async (req, res) => {
    try {
        res.render('admin/dashboard', {layout: 'addSample'})
    } catch (e) {
        res.render('404')
    }
}
module.exports.showEditSampleForm = async (req, res) => {
    try {
        const sample = await sampleModel.findById(req.params.id)
        res.render('admin/dashboard', {layout: 'editSample', data: sample})
    } catch (e) {
        res.render('404')
    }
}
module.exports.showSingleSample = async (req, res) => {
    try {
        const sample = await sampleModel.findById(req.query.id)
        res.render('admin/dashboard', {layout: 'singleSample', data: sample})
    } catch (e) {
        res.render('404')
    }
}
module.exports.saveSample = async (req, res) => {
    new upload('samples', 'images', true).uploadImages()(req, res, async (err) => {
        if (err) {
            res.status(400).send({message: err})
        } else {
            await mediaModel.createMany(req.files)
            res.status(200).send({message: 'successFully images saved'})
        }
    })
}
module.exports.editSample = async (req, res) => {

}
module.exports.deleteSample = async (req, res) => {
    try {
        await sampleModel.deleteById(req.body.id)
        res.status(200).send({message: messages.successDeleteSample})
    } catch (e) {
        res.status(400).send({message: e.message})
    }
}
