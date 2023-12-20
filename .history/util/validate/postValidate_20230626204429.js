const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.postValidated = [
    check('title')
    .isEmpty()
    .withMessage('title is required'),
    check('content')
    .isEmpty()
    .withMessage('content is required'),
    check('image')
    .isEmpty()
    .withMessage('image is required'),
    validationResult
]

exports.PostValidatedB = [
    check('postId')
    .isEmpty()
    .withMessage('title is required'),
    check('content')
    .isEmpty()
    .withMessage('content is required'),
    check('image')
    .isEmpty()
    .withMessage('image is required'),
    validationResult
]