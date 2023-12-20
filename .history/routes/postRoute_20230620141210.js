const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/download/:filePath', (req, res, next) =>{
   cons{filePath}(req.params.filePath)
  const filePathDown = path.join(__dirname, '../uploads', 

})

module.exports = router;