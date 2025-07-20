import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext';

const cart = () => {

  const {cartItems, foodList, removeFromCart} = useContext(StoreContext);


  return (
    <div className='cart'>
      <div className="cart-items">
        
      </div>
    </div>
  )
}

export default cart
