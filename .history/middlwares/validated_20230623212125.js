const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
    const errors = validationResult(req);

   if(!errors.isEmpty()){

    
   }
next();

}
