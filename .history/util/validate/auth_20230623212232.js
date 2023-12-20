const {check} = require('express-validator');
const valida


exports.signUp = [
    check('name')
    .isEmpty()
    .withMessage('name is required'),
    //  result
]