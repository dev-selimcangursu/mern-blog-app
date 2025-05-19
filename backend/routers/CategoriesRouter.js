const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/CategoriesController')

router.get('/',CategoriesController.getAllCategories);
router.get('/subcategories',CategoriesController.getAllSubCategories);

module.exports = router