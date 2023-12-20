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

router.route('/ca')
.post(
    isAuth,
    // postValidated,
    creatServiceCategory
  
    )
.get(getServiceCategories)


router.route('/category/:categoryId')
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