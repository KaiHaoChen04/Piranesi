import userModel from "../models/userModel.js";


//Add to cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId); //We will get this from the middleware
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){ //If no entries

            cartData[req.body.itemId] = 1; //Create new entry
        }
        else{
            cartData[req.body.itemId] += 1; //Add onto existing entry
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Added to cart"});
    } catch (error) {
        
    }
}

//Remove from cart
const removeFromCart = async(req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Removed from cart"});
    } catch (error) {
        console.log(error);
    }
}

//Get cart
const getCart = async(req, res) => {

}

export {addToCart, removeFromCart, getCart};