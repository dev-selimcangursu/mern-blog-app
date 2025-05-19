const aboutController = require("../controllers/aboutController");
const express = require("express");
const router = express.Router();

router.get("/", aboutController.getAbout);

module.exports = router