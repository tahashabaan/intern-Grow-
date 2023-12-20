const {Schema, model} = require('mongoose')


const commentSchema = new Schema({
    coment:{
        type:String,
        required:true
    },
    userId:{
      type: Schema.Types.ObjectId,
      required: [true, 'authorId not exists']
    },
    postId:{
        type: Schema.Types.ObjectId,
         required: [true, 'postId not exists']
    }
})

module.exports = model('comment', commentSchema);