const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
    const errors = validationResult(req);
   if(!errors.isEmpty()){
      res.status(402).json({message:'error in express-validator ',errors:errors.array()})
   }
next();
}
