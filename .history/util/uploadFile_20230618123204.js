const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb)
})
module.exports = multer({})