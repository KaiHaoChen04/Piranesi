import React from 'react';
import './navbar.css';
import cart from '../../assets/cart.png'

const Navbar = () => { 
  return (
    <div className='navbar'>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Shop</li>
        <li>Contacts</li>
      </ul>
      <div className="navbar-right">
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Navbar; 