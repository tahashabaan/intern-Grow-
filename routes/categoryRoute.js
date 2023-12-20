import path from 'path';

import {Router} from 'express';


import {
    getServiceCategories, 
    creatServiceCategory,
    getServiceCategory,
    updateServiceCategory,
    deleteServiceCategory }  from '../services/categorytService.js';

// const {
//     postValidated,
//     postValidatedById
// } = require('../util/validate/postValidate')

import isAuth from '../middlwares/is_auth.js';


const router = Router();

router.route('/category')
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




export default router;