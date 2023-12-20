const path = require('path');

const express = require('express');


const {
    getServiceComments, 
    creatServiceComment,
    getServiceComment,
    updateServiceComment,
    deleteServiceComment } = require('../services/commentService');

const {
    postValidated,
    postValidatedById
} = require('../util/validate/postValidate')

const isAuth = require('../middlwares/is_auth')


const router = express.Router();

router.route('/posts')
.post(
    isAuth,
    postValidated,
    upload.single('image'),
    uploadPostImage,
    createService
    )
.get(getService)


router.route('/posts/:postId')
.get(postValidatedById,getServiceById)
.put(
    isAuth,
    postValidatedById,
    upload.single('image'),
    uploadPostImage,
    updateServiceById
    )
.delete(isAuth,
        postValidatedById,
        removeService)


router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads/images', filePath);
   console.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;