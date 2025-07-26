import React from 'react'
import './placeOrder.css'

const placeOrder = () => {
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
      </div>
      <div className="place-order-right">

      </div>
    </form>
  )
}

export default placeOrder
