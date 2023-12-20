const path = require('path');

const express = require('express');
const router = express.Router();


router.get('/upload-file', (req, res, next) => {
    res.render('upload', {
       pageTitle:'uploadFile',
    })
   })

   .post('/upload-file', uploadMid.single('file'),async(req, res, next)=> {
    // console.log(req.file);
    const file = req.file;
    const fileName = Date.now() + '-' + file.originalname;
    await 
    sharp(file.buffer)
    .resize(600,800)
    .toFormat('jpg')
    .toFile(`uploads/images/${fileName}`)

    postModel.create({
        image:fileName
    })
    .then(reslut => res.status(200).json({reslut:reslut}))
    .catch(err =>  res.status(400).json({error:err}))
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