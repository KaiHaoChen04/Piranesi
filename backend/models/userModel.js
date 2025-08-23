import mongoose from 'mongoose'

//Set our user template
const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    cartData: {type:Object, default:{}}}, //For storing user cart item data
    {minimize:false}) // This tells mongoDB to not delete empty object, instead store them in database

// An OR operator so we only execute this line once otherwise we will create multiple users everytime we execute the code
const userModel = mongoose.models.user || mongoose.model('user', userSchema);

export default userModel;