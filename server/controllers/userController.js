const bcrypt=require('bcrypt');
const User=require('../models/userModel');

exports.registerUser= async(req,res,next)=>{
   try {
     // console.log(req.body);
     const { username, email, password}=req.body;

     const usernameAvailable= await User.findOne({username});
     if(usernameAvailable){
         return res.json({message:"username already taken", status:false});
     }
 
     const emailAvailible= await User.findOne({ email });
     if(emailAvailible){
         return res.json({message:"Email exists", status:false});
     }
 
     const hashedPassword= await bcrypt.hash(password, 10);
 
     const user=await User.create({
         email,
         username,
         password:hashedPassword
     })
 
     delete user.password;
     return res.json({status:true, user});
   } catch (error) {
        next(error);
   }

}