import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('db key').then(()=>console.log("DB connected"));
}