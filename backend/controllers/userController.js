import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login 
const loginUser = async (req,res) => {

}

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
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

        //Salting password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()

    } catch (error) {
        
    }
}

export {loginUser, registerUser};