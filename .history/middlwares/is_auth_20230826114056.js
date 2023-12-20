const jwt = require('jsonwebtoken');

module.exports=async (req,res, next) => {
  const auth = req.get('Authorization');
  try{
    if(!auth)  throw new Error({ message:'you should logged in ...'})
     const token = auth.split('/')[1];

   const decodedToken = await jwt.verify(token, 'mySecretKey123');
    if(!decodedToken)  throw new Error('Invalid Token');
    req.userId = decodedToken.userId;
    req.user= 
  }catch(e){
    res.status(400).json({ message:'you should logged in ...', error:e });
  }
  next();
}
