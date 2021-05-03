const sampleModel = require('../../models/sample')
const messages = require('../../services/messages')
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
