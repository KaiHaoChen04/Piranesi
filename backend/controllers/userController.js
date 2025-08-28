import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//login 
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne(email);
        if(!user){
            return res.json({success:false,message:"User does not exist"});
        }
        const matchPassword = await bcrypt.compare(password,user.password);
        if(!matchPassword){
            return res.json({success:false, message:"Invalid password, try again"});
        }
        const token = createToken(user._id); //Creates another token for this validated session
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        return res.json({success:false,messsage:"Error"});
    }

}
//JSON web token for user authentication, takes user ID as input and uses the secret key from .ENV to sign in
//The server can later verify this token to confirm the user is legitimate without requiring them to send their password with every request.
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

        //saves user in database and stores it in the user variable
        const user = await newUser.save();
        //Generate a token based on user id
        const token = createToken(user._id); //The server doesn't need to store session information, all data are in token itself
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {loginUser, registerUser};