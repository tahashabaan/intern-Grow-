const path = require('path');

const express = require('express');


const {
     } = require('../services/authService');

// const {
    
// } = require('../util/validate/authValidate')
const router = express.Router();

router.route('/auth/signup')
.post(
    
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



module.exports = router;