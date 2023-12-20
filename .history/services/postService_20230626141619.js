const postModel = require('../models/postModel');

exports.createService = async (req, res, next) =>{
    postModel
    .create(req.body)
    .then(reslut => res.status(200).json({message:'post added sucessfu' }))
}
