import mongoose from "mongoose";

//Database Schema 
const clothes_schema = new mongoose.Schema({
    name: {type:String, required:true},
    price: {type:Number, required:true},
    image: {type:String, required:true},
    description: {type:String, required:true},
    category: {type:String, required:true}
})

// An OR operator so we only execute this line once otherwise we will create multiple models everytime we execute the code
const clothes_model = mongoose.model.clothes || mongoose.model('clothes', clothes_schema) 

export default clothes_model 