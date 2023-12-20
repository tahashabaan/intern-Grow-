const Category = require('../models/categoryModel');


exports.getServiceCategories = async (req, res, next) => {

    const categorys = await Category.find();
     res.status(202).json({
        status:sucess,
        message:'categorys',
        categorys
       })
    }

// @permission should authorizated
exports.creatServiceCategory =async (req, res, next) => {
    // userId

   const category= await Category.create(req.body);
   res.status(202).json({
    status:sucess,
    message:'category created sucessfully'
   })
}

// permission public acess
exports.getServiceCategory =async (req, res, next) => {
    // userId
   const categoryId = req.params.categoryId;
   const category = await Category.findById(categoryId)
   res.status(202).json({
    status:sucess,
    message:'category  sucessfully fetched',
    category
   })
}


// @permission should authorizated
exports.updateServiceComment =async (req, res, next) => {
   const categoryId = req.params.categoryId;
   const category = await Category.findByIdAndUpdate(categoryId)
   
   res.status(202).json({
    status:sucess,
    message:'comment updated sucessfully'
   })
}

// @permission should authorizated
exports.deleteServiceComment =async (req, res, next) => {
    // userId
    const mesgId = req.params.mesgId;
    await Comment.findByIdAndRemove(mesgId)
   res.status(202).json({
    status:sucess,
    message:'comment deleted sucessfully'
   })
}




