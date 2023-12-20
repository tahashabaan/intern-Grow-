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
        ref:'user'
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
        ref:'Userser'
    }],
    dislike:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
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




    

})

module.exports = mongoose.model('User', userSchema);
