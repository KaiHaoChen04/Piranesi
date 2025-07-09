import React, { useContext } from 'react'
import './Display.css'
import { StoreContext } from '../../context/StoreContext'

const Display = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='display' id='display'>
      <h2>Most Popular</h2>
    </div>
  )
}

export default Display
