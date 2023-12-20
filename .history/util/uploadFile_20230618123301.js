const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
    cb(null, '/uploads')
    },
    filename:
})
module.exports = multer({storage, fileFilter})