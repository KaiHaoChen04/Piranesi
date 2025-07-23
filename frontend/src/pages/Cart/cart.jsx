import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItem, clothes_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-titles">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {clothes_list.map((item, index) => {
          if (cartItem[item.id] > 0) {
            return (
              <div>
                <div className="cart-item-titles cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item.id]}</p>
                  <p>${item.price * cartItem[item.id]}</p>
                  <p onClick={()=>{removeFromCart(item.id)}}className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
