const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.postValidated = [
    check('ti')
    .isEmpty()
    .withMessage('name is required'),
    //  result
    validationResult
]