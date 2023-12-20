const multer = require('multer');

const storage = multer.memoryStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads/');
    },

    filename:function(req, file, cb){
      cb(null, Date.now()+'-'+file.originalname);
    }
})

const fileFilter = (req, file , cb) => {
    const type = file.mimetype.split('/')[0];
    if (type !== 'image') {
        return cb(new Error('only image you can upload'), null)
    }
      cb(null, true);
}

   const upload = multer({storage, fileFilter});
   
   export