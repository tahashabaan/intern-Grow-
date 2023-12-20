const postModel = require('../models/postModel');

exports.createService = async (req, res, next) =>{
    postModel
    .create(req.body)
    .then(post => res.status(200).json({message:'post added sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can added post' , post}))
}
