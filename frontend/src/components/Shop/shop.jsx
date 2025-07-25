import React from 'react'
import './shop.css'
import { menu_list } from '../../assets/assets'

const shop = ({category,setCategory}) => {
  return (
    <div className='shop-menu' id = 'shop-menu'>
      <h1>Explore Our Latest Collections</h1>
      <div className='Collection-Lists'> 
        {menu_list.map((item, index)=>{
            return (
                <div onClick = {()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='shop-menu-list-items'>
                    <img className = {category === item.menu_name?"active":""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default shop

