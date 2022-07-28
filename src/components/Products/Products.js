import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import errorImg from "../../images/error-404.png";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products(props) {

  const { products, error, loading } = useFetch();


//function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way even if the page is refreshed, the icon will indicate that the product is already in the cart.
useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.forEach((product) => {
      const cartIcon = document.querySelector(
        `[data-id="${product.id}"]`
      );
      if(cartIcon) cartIcon.classList.add("item__added__background");
    });
  }
}
, [products]);


  //function to add the class fav__added__background to the fav icons when the products are rendered if they are alreadthe icon will in
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      favs.forEach((fav) => {
        const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
        if (favIcon) favIcon.classList.add("fav__added__background");
      }
      );
    }
  }
  , [products]);

  return (
    <>
        <div className="title__row">
          <h2 className="products__title">All Products</h2>
          <select>
            <option value="">Default Shorting</option>
            <option value="">Short by price</option>
            <option value="">Short by popularity</option>
            <option value="">Short by rating</option>
            <option value="">Short by sale</option>
          </select>
        </div>
        <div className="products__container">
          {loading ? (
            <Spinner className="spinner" animation="border" variant="primary" />
          ) : null}
          {error ? (
            <>
              <img
                className="error-img"
                src={errorImg}
                alt="error message"
              />
            </>
          ) : null}
          {products.map((product) => (
            <ProductCard key={product.id}>
              <div data-card={product.id} className="card">
                <Link to={`product/${product.id}`} state={product}>
                  <img src={product.img} alt={product.title} />
                      <h4 className="card__title">{product.title}</h4>
                  <span className="card__description">{product.category}</span>
                      <span className="card__shop__price">{product.price}€</span>
                </Link>
                <div className="card__shop">
                    <button className="card__shop__share"><BsShareFill /></button>
                    <button
                      fav-id = {product.id}
                      onClick={() => props.manageFav(product)}
                      className="card__shop__fav"
                      >
                      <MdFavoriteBorder />
                    </button>
                    <button
                      data-id={product.id}
                      className="card__shop__action"
                      onClick={() => props.manageClick(product)}
                    >
                      <BsHandbagFill />
                    </button>
                </div>
              </div>
            </ProductCard>
          ))}
        </div>
    </>
  );
}


export default Products;
