import React from 'react';
import Navbar from './components/Navbar/navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/placeOrder'
import Footer from './components/Footer/Footer';
import LogInPopUp from './components/LogInPopUp/LogInPopUp';
import { useState} from 'react';
import Purpose from './pages/Purpose/Purpose';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LogInPopUp setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/cart' element = {<Cart/>} />
          <Route path='/order' element = {<PlaceOrder/>} />
          <Route path='purpose' element = {<Purpose/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
    
  );
};

export default App;