const path = require('path');

const express = require('express');

const upload= require('../util/uploadFile');

const {
    uploadPostImage,
    createService, 
    getService,
    getServiceById,
    updateServiceById,
    removeService } = require('../services/postService');

const {
    postValidated,
    postValidatedById
} = require('../util/validate/postValidate')

const isAuthantica


const router = express.Router();

router.route('/posts')
.post(
    postValidated,
    upload.single('image'),
    uploadPostImage,
    createService
    )
.get(getService)


router.route('/posts/:postId')
.get(postValidatedById,getServiceById)
.put(
    upload.single('image'),
    uploadPostImage,
    postValidatedById,
    updateServiceById
    )
.delete(postValidatedById,removeService)


router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads/images', filePath);
   console.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;