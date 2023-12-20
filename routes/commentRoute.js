import {Router} from'express';

import {
    getServiceComments, 
    creatServiceComment,
    getServiceComment,
    updateServiceComment,
    deleteServiceComment } from'../services/commentService.js';

// import {
//     postValidated,
//     postValidatedById
// } from '../util/validate/postValidate';
 
import isAuth from '../middlwares/is_auth.js'


const router = Router();

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




export default router;