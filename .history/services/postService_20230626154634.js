const sharp = require('sharp');

const postModel = require('../models/postModel');

exports.uploadPostImage = async (req, res, next) => {
    const file = req.file;
    const fileName = Date.now() + '-' + file.originalname;
    
     await sharp(file.buffer)
     .resize(600,9800)
     .toFormat('jpg')
     .toFile(`uploads/images/${fileName}`)

     req.body.image = process.env.BASE_URL+fileName;
     next();
}
exports.createService = async (req, res, next) =>{
    postModel
    .create(req.body)
    .then(post => res.status(200).json({message:'post added sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can added post' , error}))
}

exports.getService = async (req, res, next) =>{
    postModel
    .find()
    .then(post => res.status(200).json({message:' sucessfuly posts' , posts}))
    .catch(error => res.status(402).json({message:'somthing went wrong' , error}))
}


exports.getServiceById = async (req, res, next) =>{
    const {postId} = req.params;
    postModel
    .findById(postId)
    .then(post => res.status(200).json({message:'post sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can find post' , error}))
}

exports.updateServiceById = async (req, res, next) =>{
    const {postId} = req.params;
    postModel
    .findByIdAndUpdate(postId, req.body)
    .then(post => res.status(200).json({message:'post updated sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can update post' , error}))
}

exports.removeService = async (req, res, next) =>{
    const {postId} = req.params;
    postModel
    .findByIdAndRemove(postId)
    .then(post => res.status(200).json({message:'the post removed ' , post}))
    .catch(error => res.status(402).json({message:'not can removed post' , error}))
}
