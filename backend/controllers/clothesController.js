import clothes_model from "../models/clothesModel.js";
import fs from 'fs'

//Controller function to add food item
//Whenever we hit this API, we will send the name, desc, price, cate, image in the body and access in the backend
//The frontend will send a POST request and I will parse this data as express.json()
const addClothes = async (req,res)=>{
    let image_filename = `${req.file.filename}`

    const clothes = new clothes_model({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await clothes.save(); // clothes will be saved in the data base
        res.json({success:true,message:"Clothes added"}); //Return an objecy in json format if succeeded 
    } catch (error) { //Else if adding clothes unsuccessful
        console.log(error);
        res.json({success:false,message:"Error"});
    }
}

export {addClothes} //Export object