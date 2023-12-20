const {Schema, model} = require('mongoose')


const categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:'string',
}, 
{timestamps:true})

module.exports = model('comment', commentSchema);