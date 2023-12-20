const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel')


exports.signUp = async(req, res, next) => {

    const { name, email, password, confirmPassword } = req.body;
    // check if email founded or not
    try {const isEmailFounded = await User.findOne({email});
     if(isEmailFounded){
        return res.status(404).json({ message: 'user signUp aleerdy', user:isEmailFounded});
     }
     // check if password equal confirm password
     if(password !== confirmPassword)  
       return res.status(403).json({message:'password not matched '})
     //genetate salt
     const salt = await bcrypt.genSalt(10);
     // encrypt password
     const hashPassword = await bcrypt.hash(password, salt);
    //update password in req.body
    req.body.password = hashPassword;
    // Create a new user document  && Save the new user to the database
     const user = await User.create(req.body);

     if (user) return res.status(202).json({message:'user created', user:res})
     }catch(err){
        res.status(202).json({message:'user created', user:res})
    } 
}
exports.signIn = async(req, res, next) => {

    const { email, password } = req.body;
    // check if email founded or not
     const user = await User.findOne({email});
     if(!user){
        return res.status(404).json({ message: 'user Not found... signUp first', user});
     }
     // compare password wih in database
     bcrypt.compare(password, user.password, (err, result) =>{
         if(err) return res.status(404).json({ message: 'password not correct', error:err});
     })

     // generta token
     const secret = 'mySecretKey123'; // Secret key used to sign the token
     const payload = {userId: user._id, username: user.name}; // data about user

     const options = {expiresIn: '3h'}; // timout
     const token = await jwt.sign(payload, secret)
// store token in cookie parser
      res.cookie('jwt', token, {
        httpOnly: true,
       // maxAge: 3 * 60 * 60 * 1000, // 3hrs in ms
      })

      req.user =

      res.status(200).json({ message: 'user is loggedIn', token });



}