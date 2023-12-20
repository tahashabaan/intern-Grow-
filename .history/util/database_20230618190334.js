const mongoose = require('mongoose');

const url ='mongodb+srv://tahashabaan48:D7zXPIP5K3HYWtyy@node-complete.y1j3stc.mongodb.net/?retryWrites=true&w=majority'
const connectDb = () =>
 mongoose.connect(url, {

});

module.exports = connectDb;