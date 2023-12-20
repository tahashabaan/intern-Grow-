const path = require('path');

const express = require('express');
const router = express.Router();


router
.route('/post')
.post

   .post('/upload-file', uploadMid.single('file'),async(req, res, next)=> {
    // console.log(req.file);
    const file = req.file;
    const fileName = Date.now() + '-' + file.originalname;
    await 
    sharp(file.buffer)
    .resize(600,9800)
    .toFormat('jpg')
    .toFile(`uploads/images/${fileName}`)

    req.body.image = `${fileName}}`
})

router.get('/download',  (req, res, next) => {

});

router.get('/download/:filePath', (req, res, next) =>{
   const{filePath} = req.params;
   const filePathDown = path.join(__dirname, '../uploads/images', filePath);
   console.log(filePathDown)
   res.download(filePathDown)
})

module.exports = router;