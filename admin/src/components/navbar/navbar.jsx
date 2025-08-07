import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Piranesi</h1>
      <h3>Admin</h3>
      <img className='profile'src={assets.admin_image} alt="" />
    </div>
  )
}

export default Navbar;
