const sampleController = require('../../controllers/admin/sample.controller')
module.exports = (router) => {
    router.route('/sample')
        .get(sampleController.showAddSampleForm)
        .post(sampleController.saveSample)
        .put(sampleController.editSample)
        .delete(sampleController.deleteSample)

    router.route('/editSample:id')
        .get(sampleController.showEditSampleForm)

    router.route('/singleSample')
        .get(sampleController.showSingleSample)
}