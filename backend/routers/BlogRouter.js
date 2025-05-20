const BlogsContoller = require("../controllers/blogsController");
const express = require("express");
const router = express.Router();

router.get("/get-all", BlogsContoller.getAllBlogs);
router.get("/get-featured", BlogsContoller.getFeatured);
router.get("/get-newest", BlogsContoller.getNewestBlog);
router.get("/get-european", BlogsContoller.getEuropeanBlogs);
router.get("/get-turkei", BlogsContoller.getTurkieBlogs);

module.exports = router;
