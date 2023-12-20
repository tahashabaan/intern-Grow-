const {check} = require('express-validator');
const validationResult = require('../../middlwares/validated')


exports.signUpValidated = [
    check('title')
    .isEmpty()
    .withMessage('title is required'),
    check('email')
    .isEmpty()
    .withMessage('content is required')
    .isEmail()
    .withMessage('you should email'),
    check('password')
    .isEmpty()
    .withMessage('password is required')
.custom((val, {req}) => {
if (val !== req.body.confirmPassword){

}
}),
    validationResult
]

exports.postValidatedById = [
    check('postId')
    .isMongoId()
    .withMessage('postId is required'),
    validationResult
]