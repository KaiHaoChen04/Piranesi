import userModel from "../models/userModel.js";


//Add to cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId}); //We will get this from the middleware
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){ //If no entries

            cartData[req.body.itemId] = 1 //Create new entry
        }
        else{
            cartData[req.body.itemId] += 1; //Add onto existing entry
        }
    } catch (error) {
        
    }
}

//Remove from cart
const removeFromCart = async(req, res) => {

}

//Get cart
const getCart = async(req, res) => {

}

export {addToCart, removeFromCart, getCart};