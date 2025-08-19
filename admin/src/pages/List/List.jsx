import React, { useState, useEffect } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = () => {

  const [list, setList] = useState([]); {/* Array for storing our food lists */}

  const url = "http://localhost:4000" 

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/clothes/list`); {/* Fetch all the clothes item from our backend */}
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("error");
    }
  }
  useEffect(() => {
    fetchList(); {/* We pass in an empty array so the useEffect runs only once and won't ever run again even if it re-renders */}
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Clothes</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key = {index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
