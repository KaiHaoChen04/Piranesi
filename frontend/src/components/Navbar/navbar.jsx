import React from 'react';
import { useState, useContext } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setShowLogin}) => { 
    const [menu, setMenu] = useState();

    const {getTotalCartAmount} = useContext(StoreContext)

  return (

    <div className='navbar'>
      <Link to='/'><h1>Piranesi</h1></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":" "}>Home</Link>
        <a href='#shop-menu' onClick={()=>setMenu("Shop")} className={menu==="Shop"?"active":" "}>Shop</a>
        <a href='#footer'onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":" "}>Contact</a>
        <a href='#footer'onClick={()=>setMenu("Purpose")} className={menu==="Purpose"?"active":" "}>Purpose</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()>0?'dot':''}></div> 
            {/* Lambda statement that basically checks if there is any items in cart, if yes then we display the orange dot, if not we return an empty div*/}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar; 