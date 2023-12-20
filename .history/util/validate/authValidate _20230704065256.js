const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.postValidated = [
    check('title')
    .isEmpty()
    .withMessage('title is required'),
    check('email')
    .isEmpty()
    .withMessage('content is required')
    .isEmail()
    .w
    ,
    check('image')
    .isEmpty()
    .withMessage('image is required'),
    validationResult
]

exports.postValidatedById = [
    check('postId')
    .isMongoId()
    .withMessage('postId is required'),
    validationResult
]