import React from 'react'
import './Items.css'
import ratingsImg from '../../assets/rating_starts.png'

const Items = ({id, name, price, description, image}) => {
  return (
    <div  className='item'>
      <div className='item-img-container'>
        <img className = 'item-img'src={image} alt="" />
      </div>
      <div className="item-info">
         <div className="item-name-rating">
            <p>{name}</p>   
            <img src={ratingsImg} alt="" />
         </div>
         <p className="item-description">{description}</p>
         <p className="item-price">${price}</p>
      </div>
    </div>
  )
}

export default Items
