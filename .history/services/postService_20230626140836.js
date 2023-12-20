const postModel = require('../models/postModel');

exports.createService = async (req, res, next) =>{
   try{
    await postModel.create()

   }catch(err){

   }
}
