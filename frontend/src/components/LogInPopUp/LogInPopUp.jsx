import './LogInPopUp.css'
import {useContext, useState} from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const LogInPopUp = ({setShowLogin}) => {
    const {url, setToken} = useContext(StoreContext);
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

    const onLogin = async (event) => {
        event.preventDefault();

        let newURL = url

        if(currentState=="Login"){
            newURL += "/api/user/login"

        }
        else{
            newURL += "/api/user/register"
        }

        const response = await axios.post(newURL, data);
        if(response.data.success){
            setToken(response.data.token); /* Receive the token data from response from register/login API and set it */
            localStorage.setItem("token", response.data.token); // Makes token survive page refreshes and keep it remembered in the browser so user doesnt have to keep logging in
            setShowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    }
  return (
    <div className='LogInPopUp'>
        <form onSubmit = {onLogin} className='login-container'>
            <div className="login-title">
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className='login-input'>
                {currentState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name}type="text" placeholder='Your Name' required/>}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
            </div>
            <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
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
