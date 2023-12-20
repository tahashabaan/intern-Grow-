const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.post = [
    check('name')
    .isEmpty()
    .withMessage('name is required'),
    //  result
    validationResult
]