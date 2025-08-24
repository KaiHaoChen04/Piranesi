import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login 
const loginUser = async (req,res) => {

}

//sign up
const registerUser = async(req,res) => {
    const {name,password,email} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false, message:"Not an email"})
        }
        if(password.length<8){
            return res.json({success:false, message:"Password too short"})
        }
        
        else{
            return res.json({success:true,message:"Register successful"})
        }
    } catch (error) {
        
    }
}

export {loginUser, registerUser};