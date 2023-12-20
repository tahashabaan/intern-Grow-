const {check} = require('express-validator');
const validationResult = 


exports.signUp = [
    check('name')
    .isEmpty()
    .withMessage('name is required'),
    //  result
]