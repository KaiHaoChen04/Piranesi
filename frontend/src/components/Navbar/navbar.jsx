import React from 'react';
import './navbar.css';
import { assets } from '../../assets/assets'

const Navbar = () => { 
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Shop</li>
        <li>Contact</li>
        <li>Purpose</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar; 