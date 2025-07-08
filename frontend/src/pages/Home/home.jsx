import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/header'
import Shop from '../../components/Shop/shop'

const home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Shop category = {category} setCategory = {setCategory}/>
    </div>
  )
}

export default home
