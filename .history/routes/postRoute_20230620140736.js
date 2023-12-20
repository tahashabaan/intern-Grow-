const express = require('express');

const router = express.Router();

router.get('/download/:filePath', (req, res, next) =>{
   console.log(req.params.filePath)
onsole.log(path)
})

module.exports = router;