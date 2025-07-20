import { createContext, useEffect, useState } from "react";
import { clothes_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});

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

    useEffect(()=>{
        console.log(cartItem)
    },[cartItem])

    const contextValue = {
        clothes_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;