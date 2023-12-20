const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.postValidated = [
    check('title')
    .isEmpty()
    .withMessage('title is required'),
    check('content')
    .isEmpty(),
        .withMessage('content is required'),
    validationResult
]