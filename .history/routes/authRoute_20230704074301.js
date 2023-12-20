const path = require('path');

const express = require('express');


const {
    signUp,
    signIn }=require('../services/authService');

// const {
    
// } = require('../util/validate/authValidate')
const router = express.Router();

router.route('/auth/signup')
.post(signUp)

router
.route('/auth/signin')
.post(signIn)






module.exports = router;