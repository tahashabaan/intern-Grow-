const path = require('path');

const express = require('express');
const router = express.Router();

router.get
router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads', filePath)
   res.download(filePathDown)
})

module.exports = router;