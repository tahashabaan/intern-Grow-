const Comment = require('../models/comment');
const Post = require('../models/postModel');

// @permission should authorizated
exports.creatService =async (req, res, next) => {
    // userId
    const userId =  user._id;
    const postId = await Post.findOne({userId})
    req.body.userId = userId;
    req.body.postId = postId;

   const comment= await Comment.create(req.body);
   res.status(202).json({
    commen
   })
}

