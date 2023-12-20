const {Schema, model} = require('mongoose')


const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:'string'
   date_created:Da
})

module.exports = model('comment', commentSchema);