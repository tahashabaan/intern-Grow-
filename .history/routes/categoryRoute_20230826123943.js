const path = require('path');

const express = require('express');


const {
    getServiceCategories, 
    creatServiceCategory,
    getServiceCategory,
    updateServiceCategory,
    deleteServiceCategory } = require('../services/categorytService');

// const {
//     postValidated,
//     postValidatedById
// } = require('../util/validate/postValidate')

const isAuth = require('../middlwares/is_auth')


const router = express.Router();

router.route('/comment')
.post(
    isAuth,
    // postValidated,
    creatServiceComment
  
    )
.get(getServiceComments)


router.route('/comment/:mesgId')
.get(
    // postValidatedById,
    getServiceComment)
.put(
    isAuth,
    updateServiceComment
    )
.delete(
        isAuth,
        deleteServiceComment)




module.exports = router;