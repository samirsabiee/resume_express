const blogController = require('../../controllers/admin/blog.controller')
module.exports = (router) => {
    router.route('/blog').get(blogController.blog)
}