import React from 'react'
import { useState } from 'react'
import './Items.css'
import ratingsImg from '../../assets/rating_starts.png'
import whiteAdd from '../../assets/add_icon_white.png'
import redIcon from '../../assets/remove_icon_red.png'
import greenIcon from '../../assets/add_icon_green.png'

const Items = ({id, name, price, description, image}) => {
    const [itemCount, setItemCount] = useState(0);
  return (
    <div  className='item'>
      <div className='item-img-container'>
        <img className = 'item-img'src={image} alt="" />
        {
          !itemCount
          ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)}src={whiteAdd} alt="" />
          :<div className='item-counter'>
            <img onClick={()=>setItemCount(prev=>prev-1)}src={redIcon} alt="" />
            <p>{itemCount}</p>
            <img onClick={()=>setItemCount(prev=>prev+1)}src={greenIcon} alt="" />
          </div>
        }
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
