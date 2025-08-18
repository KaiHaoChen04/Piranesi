import React from 'react'
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

  return (
    <div className='list add flex-col'>
      <p>All Clothes</p>
      <div className='list-table'>
        <div className="list-table-title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      </div>
    </div>
  )
}

export default List
