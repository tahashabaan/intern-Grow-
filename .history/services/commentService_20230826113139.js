const Comment = require('../models/comment');
const Post = require('../models/postModel');

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

exports.deleteServiceComment =async (req, res, next) => {
    // userId
    const mesgId = req.params;
    const postId = await Post.findOne({userId})
    req.body.userId = userId;
    req.body.postId = postId;

   const comment= await Comment.create(req.body);
   res.status(202).json({
    status:sucess,
    message:'comment created sucessfully'
   })
}




