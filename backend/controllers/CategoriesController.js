const { default: mongoose } = require('mongoose');
const Categories = require('../models/Categories')

const getAllCategories = async (req,res)=>{

    try {
        const categories = await Categories.find({
              parent_category_id: null,
              is_active:1
        });
        res.json(categories)
    } catch (error) {
        res.json(error)
    }

}

const getAllSubCategories = async(req,res)=>{
    try {
        let subcategories = await Categories.find({
             parent_category_id: { $ne: null }, 
             is_active:1
        })
         res.json(subcategories)
    } catch (error) {
         res.json(error)
    }
}

module.exports = {
    getAllCategories,
    getAllSubCategories
}