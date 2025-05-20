const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({

    category_name : {type:String},
    parent_category_id:{type:mongoose.Schema.Types.ObjectId},
    is_active:{type:Number},
},{timestamps:true})

module.exports =mongoose.model('Categories',CategoriesSchema)