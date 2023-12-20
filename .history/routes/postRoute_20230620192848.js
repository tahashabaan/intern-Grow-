const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads', filePath);
onsole.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;