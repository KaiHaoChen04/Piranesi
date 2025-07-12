import { createContext } from "react";
import { food_list } from "../assets/assets";
import cart from "../pages/Cart/cart";

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

    const contextValue = {
        food_list
    }
    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;