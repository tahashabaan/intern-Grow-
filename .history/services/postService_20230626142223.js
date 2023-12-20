const postModel = require('../models/postModel');

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
    .findByIdAndUpdate(postId)
    .then(post => res.status(200).json({message:'post upda sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can added post' , error}))
}

exports.createService = async (req, res, next) =>{
    postModel
    .create(req.body)
    .then(post => res.status(200).json({message:'post added sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can added post' , error}))
}
