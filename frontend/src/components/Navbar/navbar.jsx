import React from 'react';
import { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets'

const Navbar = () => { 
    const [menu, setMenu] = useState();
  return (

    <div className='navbar'>
      <h1>Piranesi</h1>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":" "}>Home</li>
        <li onClick={()=>setMenu("Shop")} className={menu==="Shop"?"active":" "}>Shop</li>
        <li onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":" "}>Contact</li>
        <li onClick={()=>setMenu("Purpose")} className={menu==="Purpose"?"active":" "}>Purpose</li>
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