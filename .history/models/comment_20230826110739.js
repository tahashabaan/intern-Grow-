const {Schema, model} = require('mongoose')


const commentSchema = new Schema({
    authorId:{
      type: Schema.Types.ObjectId,
      required: [true, 'authorId not exists']
    },
    postId:{
        
    }
})