const path = require('path');

const express = require('express');

const upload= require('../util/uploadFile');

const {
    uploadPostImagem,
    createService, 
    getService,
    getServiceById,
    updateServiceById,
    removeService } = require('../services/postService');

const router = express.Router();
// console.log(uploadPostImagem, 
//     createService, 
//     getService,
//     getServiceById,
//     updateServiceById,
//     removeService)

router.route('/api/posts')
.post(
    upload.single('image'),
    

    )


router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads/images', filePath);
   console.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;