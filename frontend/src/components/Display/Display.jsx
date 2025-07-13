import React, { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/StoreContext'
import Items from '../Items/Items'

const Display = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='display' id='display'>
      <h2>Most Popular</h2>
      <div className='display-list'>
        {food_list.map((items, index) => {
          {console.log(category,items.category);}
            if(category==="All" || category===items.category){ /* This displays the items based on selected items */
              return <Items key = {index} 
                        id = {items.id} 
                        name = {items.name} 
                        price = {items.price} 
                        description = {items.description} 
                        image = {items.image}/>
            } 
            })}
      </div>
    </div>
  )
}

export default Display
