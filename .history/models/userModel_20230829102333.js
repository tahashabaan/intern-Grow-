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
    viewer:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],

    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]



    

})

module.exports = mongoose.model('User', userSchema);
