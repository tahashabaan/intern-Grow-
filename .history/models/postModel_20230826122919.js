
const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    title:{
        type: 'string',
        required:true,
    },
    content:{
        type: 'string',
        required:true,
    },
    image:{
        type: 'string',
        required:true,
    },
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'category',
        required:true, 
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true, 
    }

    //commentId
},{timestamps:true})

module.exports = mongoose.model('Post', postSchema);