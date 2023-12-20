const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.postValidated = [
    check('title')
    .isEmpty()
    .withMessage('name is required'),
    check('content')
    .isEmpty()
    .withMessage('name is required'),
    validationResult
]