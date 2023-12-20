const Post = require('../models/postModel');
const User = require('../models/userModel');


exports.whoViewProfile = (req, res, next) => {
//  userId => you want to  addd viwer Pos
// 1-check  if show my profile or not
}

exports.following = async (req, res, next) => {
// id => user I follwoing it
 const yourUserId = await findById(req.params.id);
// id I my
const myId = await findById(req.user.id);


}

exports.unfollowing = (req, res, next) => {
    
}

exports.blocked = (req, res, next) => {
    
}

exports.unBlocked = (req, res, next) => {
    
}
exports.adminBlocked = (req, res, next) => {
    
}

exports.adminUnBlocked = (req, res, next) => {
    
}




