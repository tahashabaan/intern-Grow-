const {Schema, model} = require('mongoose')


const commentSchema = new Schema({
    authorId:{
      type: Schema.Types.ObjectId,
      
    }
})