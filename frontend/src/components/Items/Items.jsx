import React, { useContext } from 'react'
import './Items.css'
import ratingsImg from '../../assets/rating_starts.png'
import whiteAdd from '../../assets/add_icon_white.png'
import redIcon from '../../assets/remove_icon_red.png'
import greenIcon from '../../assets/add_icon_green.png'
import { StoreContext } from '../../context/StoreContext'

const Items = ({id, name, price, description, image}) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
    
    return (
        <div className='item'>
            <div className='item-img-container'>
                <img className='item-img' src={image} alt="" />
                {
                    !cartItem[id]
                    ? <img className='add' onClick={()=>addToCart(id)} src={whiteAdd} alt="" />
                    : <div className='item-counter'>
                        <img onClick={()=>removeFromCart(id)} src={redIcon} alt="" />
                        <p>{cartItem[id]}</p>
                        <img onClick={()=>addToCart(id)} src={greenIcon} alt="" />
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

export default Items;