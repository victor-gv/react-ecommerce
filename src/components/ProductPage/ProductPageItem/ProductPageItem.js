import React, { useState, useEffect } from "react";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";


const ProductPageItem = ({ manageFav, manageClick, manageShare }) => {

  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { isAuthenticated } = useAuthContext();


useEffect(() => {
  getProduct();
}
, [params]);


const getProduct = async () => {
  try {
    const response = await fetch(`https://shophub20-server.herokuapp.com/products/?title=${params.title}`);
    if (response.ok) {
      let product = await response.json();
      product = product[0];
      setProduct(product);
    } else {
      navigate("/error");
    }
  } catch (error) {
    console.log(error);
  }
}




  return (
    <div data-card={product.id} className="small-container single-product">
      <div className="row">
        <div className="product_img col-6">
          <img
            src={product.img}
            alt={product.title}
            width="100%"
          />

        </div>
        <div className="col-6">
          <h1>{product.title}</h1>
          <h4>{product.price}€</h4>
          <select>
            <option>Select Size</option>
            <option>46</option>
            <option>45</option>
            <option>44</option>
            <option>43</option>
            <option>42</option>
          </select>


          <h3>
            Product Details
          </h3>
          <br />
          <p className="product__description">
            {product.description}
          </p>
          <div className="card__shop">
            <button 
              className="card__shop__share"
              onClick={() => manageShare(product)}
              ><BsShareFill /></button>
            <button
              fav-id = {product.id}
              onClick={() => manageFav(product)}
              className="card__shop__fav"
              >
              <MdFavoriteBorder />
            </button>
            <button
              data-id={product.id}
              className="card__shop__action"
              onClick={() => manageClick(product)}
            >
              <BsHandbagFill />
            </button>
        </div>
        </div>
      </div>
    </div>

    
  );
};

export default ProductPageItem;
