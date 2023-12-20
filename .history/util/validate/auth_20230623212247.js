const {check} = require('express-validator');
const validationResult = require('../')


exports.signUp = [
    check('name')
    .isEmpty()
    .withMessage('name is required'),
    //  result
]