import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/header'
import Shop from '../../components/Shop/shop'
import Display from '../../components/Display/Display'

const home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Shop category = {category} setCategory = {setCategory}/>
      <Display category={category}/>
    </div>
  )
}

export default home
