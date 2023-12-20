const {Schema, model} = require('mongoose')


const commentSchema = new Schema({
    coment:{
        type:String,
        required:true
    },
    authorId:{
      type: Schema.Types.ObjectId,
      required: [true, 'authorId not exists']
    },
    postId:{
        type: Schema.Types.ObjectId,
         required: [true, 'postId not exists']
    }
})

modu