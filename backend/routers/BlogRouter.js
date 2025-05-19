const BlogsContoller = require('../controllers/blogsController')
const express = require('express')
const router = express.Router();

router.get('/get-featured',BlogsContoller.getFeatured)
router.get('/get-newest',BlogsContoller.getNewestBlog)

module.exports = router