import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export const signup=async (req,res,next)=>{
    console.log(req.body);
    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser=User({username,email,hashedPassword});
    try{
        await newUser.save();
        res.status(201).json({ success: true, message: "user created successfully" });
    }catch(error){
      // next(errorHandler(550,"error in creating user"));
     next(error);
    }
    
}

export const signin=async (req,res,next)=>{
    const {email,password}=req.body;
    try{
        const validUser=await User.findOne({email})
        console.log(validUser);
        if(!validUser) return next(errorHandler(404,"User not found"));
        const validPassword=bcryptjs.compareSync(password,validUser.hashedPassword);
        if(!validPassword) return next(errorHandler(401,"Wrong Credentials"));
        const token =jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {hashedPassword:pass,...rest}=validUser._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(200).json(rest);
    }catch(error){
        next(error);
    }
}