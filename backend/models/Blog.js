const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    image_url : {type:String},
    title:{type:String},
    slug:{type: String},
    category_id :{type:mongoose.Schema.Types.ObjectId},
    parentcategory_id: {type:mongoose.Schema.Types.ObjectId},
    content:{type:String},
    is_active:{type:Number},
    featured:{type:Boolean}
})

module.exports = mongoose.model('Blogs',BlogSchema)