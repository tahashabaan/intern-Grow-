const sharp = require('sharp');

const postModel = require('../models/postModel');

exports.uploadPostImage = async (req, res, next) => {
    if(req.file != undefined) {
     const file = req.file;
     const fileName = Date.now() + '-' + file.originalname; 

      await sharp(file.buffer)
      .resize(600,900)
      .toFormat('jpg')
      .toFile(`uploads/images/${fileName}`)

      req.body.image = `http://localhost:5000/images/${fileName}`;
    }
next();
}

// console.log(process.env.BASE_URL)

exports.createService = async (req, res, next) =>{
    req.body.userId = req.userId;
    postModel
    .crea(req.body)
    .then(post => res.status(200).json({message:'post added sucessfuly' , post}))
    .catch(error => res.status(402).json({message:'not can added post' , error}))
}

exports.getService = async (req, res, next) =>{
    let {page, size} = req.query;
    page = page? parseInt(page): 1;
    size = size? parseInt(size): 10;

    const totalItems= await postModel.countDocuments();
    const pages = Math.ceil(totalItems/size);
    const skip = (page-1) * size;

    postModel
    .find()
    .limit(size)
    .skip(skip)
    .then(posts => res.status(200).json({
        message:' sucessfuly posts' , 
        posts,
        current_page:page, 
        total_page:pages}))
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
