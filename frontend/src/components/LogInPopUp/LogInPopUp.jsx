import React from 'react'
import './LogInPopUp.css'
import {useState} from 'react';
import { assets } from '../../assets/assets';

const LogInPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login");
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }
  return (
    <div className='LogInPopUp'>
        <form className='login-container'>
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className='login-input'>
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name}type="text" placeholder='Your Name' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>I agree to the terms and services</p>
            </div>
            {currentState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default LogInPopUp
