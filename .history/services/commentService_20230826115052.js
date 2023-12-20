const Comment = require('../models/comment');
const Post = require('../models/postModel');


exports.getServiceComments = async (req, res, next) => {

    const comments = await Comment.find();
     res.status(202).json({
        status:sucess,
        message:'comments',
        comments
       })
    }

// @permission should authorizated
exports.creatServiceComment =async (req, res, next) => {
    // userId
    const userId =  user._id;
    const postId = await Post.findOne({userId})
    req.body.userId = userId;
    req.body.postId = postId;

   const comment= await Comment.create(req.body);
   res.status(202).json({
    status:sucess,
    message:'comment created sucessfully'
   })
}

// permission public acess
exports.getServiceComment =async (req, res, next) => {
    // userId
   const msgId = req.params.mesgId;
   const comment = await Comment.findById(mesgId)
   res.status(202).json({
    status:sucess,
    message:'comment  sucessfully fetched',
    comment
   })
}


// @permission should authorizated
exports.updateServiceComment =async (req, res, next) => {
    // userId
    const userId =  user._id;
    // const postId = await Post.findOne({userId})
    // req.body.userId = userId;
    // req.body.postId = postId;

   const comment= await Comment.findOne({userId});
//    comment.userId = userId;
//    comment.postId = postId;
   comment.message= req.body.message;

   await comment.save();
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




