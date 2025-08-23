import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from 'axios'
import { toast } from "react-toastify";

const Add = ({url}) => {
  {
    /* Image gets stored in this state variable. False means no files selected yet  */
  }
  const [image, setImage] = useState(false);
  {
    /* Data entered by the admin via form gets stored in the data state */
  }
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Shirts"
  });

  {
    /* A universal input handler and fetch the name(ex. name, price, category, description) and takes the value in the input field then updates the data object on the new value*/
  }
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    {
      /* [name]:value uses computed property names in JS which if a user types in the price field(name="price"), it will update data.price*/
    }
  };
  {
    /* Using axios to post the data to backend database using async and await for background threading */
  }
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    {
      /* This prevents the web from automatically refreshing after submit */
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image",image);
    const response = await axios.post(`${url}/api/clothes/add`,formData);
    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        category: "Shirts"
      })
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  };
  {
    /* Logs the data as an array in the console */
  }
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
            />{" "}
            {/* If image state is true, the displaying image will be the selected image object in the array otherwise it will be the upload image */}
          </label>
          {/* This detects a change in the file since we uploaded a file, if detected, it will (event.target.files[0] selects the first file in the array object and sets the image state to the image state aka the file object)*/}
          <input
            onChange={(event) => setImage(event.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Content"
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
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
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$"
            />
          </div>
        </div>
        <button type="submit" className="add-bottom">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
