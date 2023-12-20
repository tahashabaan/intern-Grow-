const {check} = require('express-validator');
const validatio


exports.signUp = [
    check('name')
    .isEmpty()
    .withMessage('name is required'),
    //  result
]