const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/download/:filePath', (req, res, next) =>{
   console.log(req.params.filePath)
console.log(path.join(__))})

module.exports = router;