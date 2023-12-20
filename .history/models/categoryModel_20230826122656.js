const {Schema, model} = require('mongoose')


const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:'str'
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