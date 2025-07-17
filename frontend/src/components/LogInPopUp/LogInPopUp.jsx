import React from 'react'
import './LogInPopUp.css'
import {useState} from 'react';
import { assets } from '../../assets/assets';

const LogInPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Sign up")
  return (
    <div className='LogInPopUp'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
        </form>
    </div>
  )
}

export default LogInPopUp
