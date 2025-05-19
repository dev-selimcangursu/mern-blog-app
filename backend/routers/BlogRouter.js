const BlogsContoller = require('../controllers/blogsController')
const express = require('express')
const router = express.Router();

router.get('/get-featured',BlogsContoller.getFeatured)

module.exports = router