const {check} = require('express-validator');
cons


exports.signUp = [
    check('name')
    .isEmpty()
    .withMessage('name is required'),
    //  result
]