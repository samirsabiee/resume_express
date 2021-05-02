const blogController = require('../../controllers/admin/blogController')
module.exports = (router) => {
    router.route('/blog').get(blogController.blog)
}