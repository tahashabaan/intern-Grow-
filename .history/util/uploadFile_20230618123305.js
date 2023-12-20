const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, '/uploads')
    },
    filename: function(req, file, cb){}
})
module.exports = multer({storage, fileFilter})