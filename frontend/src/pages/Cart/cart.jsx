import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItem, clothes_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

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
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>$ {getTotalCartAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$ {2}</p>
              </div>
              <div className="cart-total-details">
                <b>Total</b>
                <b>$ {getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="promo-code">
          <div>
            <p>Enter Promo Code</p>
            <input type="text" placeholder="Code"/>
            <button>Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
