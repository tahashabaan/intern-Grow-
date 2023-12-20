const mongoose = require('mongoose');

const  userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required:true,
    },
    email:{
        type: 'string',
        required:true,
    },
    password:{
        type: 'string',
        required:true,
    },
    token:{
        type:String
    },

    role :{ 
        type:String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    isBlocked: {
        type: Boolean,
        default: false,
      },
    viewer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],

    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    like:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    dislike:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    posts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],

    comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "comment",
        },
      ],
  
      blocked: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      plan: {
        type: String,
        enum: ["Free", "Premium", "Pro"],
        default: "Free",
      },
      userAward: {
        type: String,
        enum: ["Bronze", "Silver", "Gold"],
        default: "Bronze",
      },   

}, {tim})

module.exports = mongoose.model('User', userSchema);
