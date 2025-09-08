import { createContext, useEffect, useState } from "react";
import { clothes_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");

    const addToCart = (itemID) => {
        if(!cartItem[itemID]){
            setCartItem((prev)=>({...prev,[itemID]:1}))
        }
        else{
            setCartItem((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        }
    }

    const removeFromCart = (itemID) => {
        setCartItem((prev)=>({...prev,[itemID]:prev[itemID]-1}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem) /*Iterate through all properties(key) in cartItem */
        {
            if(cartItem[item]>0){
                let itemInfo = clothes_list.find((product)=>product.id===item) /*This finds the exact item */
                totalAmount+=itemInfo.price*cartItem[item]
            }
        }
        return totalAmount;
    } 

    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token")); //This will constantly update the webpage on the token state so user doesn't get logged out if they refresh page
        }
    },[])

    const contextValue = {
        clothes_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;