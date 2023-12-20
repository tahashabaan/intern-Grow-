import {Router} from 'express';

import {
    signUp,
    signIn
} from '../services/authService.js';

// import {
//     signUp,
//     signIn
// }from '../util/validate/authValidate.js'


const router = Router();

router
.route('/auth/signUp')
.post(signUp)

router
.route('/auth/signIn')
.post(signIn)

export default router;