import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Piranesi</h1>
            <div className='social-footer'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>Info</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Fabrication</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>Contact Us</h2>
            <ul>
                <li>+1-352-636-6477</li>
                <li>customerinfo@piranesi.com</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
