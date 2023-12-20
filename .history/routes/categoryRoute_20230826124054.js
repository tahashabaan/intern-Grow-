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
    creatServiceCategory
  
    )
.get(getServiceCategories)


router.route('/comment/:mesgId')
.get(
    // postValidatedById,
    getServiceCategory)
.put(
    isAuth,
    updateServiceCategory
    )
.delete(
        isAuth,
        deleteServiceCategory)




module.exports = router;