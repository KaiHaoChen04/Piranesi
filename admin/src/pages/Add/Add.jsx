import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'

const Add = () => {
  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_icon} alt=""/>
          </label>
          <input type="file" id="image" hidden required/>
        </div>
        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input type="text" name="name" placeholder='Type here'/>
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" rows="6" placeholder='Content' required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name="category">
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Jackets">Jackets</option>
              <option value="Jorts">Jorts</option>
              <option value="Hats">Hats</option>
              <option value="Bandana">Bandana</option>
              <option value="Sweater/Hoodies">Sweater/Hoodies</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input type="number" name='price' placeholder='$'/>
          </div>
        </div>
        <button type='submit' className='add-bottom'>ADD</button>
      </form>
    </div>
  )
}

export default Add
