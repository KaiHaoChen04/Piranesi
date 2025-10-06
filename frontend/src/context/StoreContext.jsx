import { createContext, useEffect, useState } from "react";
import { clothes_list } from "../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");

    const addToCart = async (itemID) => {
        if (!cartItem[itemID]){
            setCartItem((prev)=>({...prev,[itemID]:1}))
        }
        else {
            setCartItem((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        }
        if(token){
            await axios.post(url+'/api/cart/add', {itemID}, {headers:{token}});
        }
    }

    const removeFromCart = async (itemID) => {
        setCartItem((prev)=>({...prev,[itemID]:prev[itemID]-1}))
        if(token){
            await axios.post(url+'/api/cart/remove', {itemID}, {headers:{token}});
        }
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
    const fetchClothesList = async(token) =>{
        const response = await axios.get(url+'/api/clothes/list');
    }
    const loadCartData = async(token) => {
        const response = await axios.post(url+'/api/cart/get', {}, {headers:{token}});
        setCartItem(response.data.cartData);
    }
    
    useEffect(() => {
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token")); //This will constantly update the webpage on the token state so user doesn't get logged out if they refresh page
        }
    },[])

    const contextValue = {
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
        clothes_list
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;