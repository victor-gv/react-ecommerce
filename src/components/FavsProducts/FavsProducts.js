import React from "react";
import { Link } from 'react-router-dom';
import ProductCard from "../ProductCard/ProductCard";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import "./FavsProducts.css";
import "../Products/Products.css";

const FavsProducts = ({initialState = [], manageFav, manageClick, emptyMessage, homePage}) => {

const favs = initialState;

  return (
    <>
      <div className="title__row--favs">
        <h2 className="products__title">Favorites</h2>
      </div>
        <div className="favs__emptyMessage">
          <h3>{emptyMessage}</h3>
              {homePage}
        </div>
      <div className="products__container">
        {favs.map((fav) => (
          <ProductCard key={fav.id}>
            <div data-fav={fav.id} className="card">
            <Link to={`/product/${fav.id}`} state={fav}>
              <img src={fav.img} alt={`${fav.title} sneaker`} />
              <h4 className="card__title">{fav.title}</h4>
              <span className="card__description">{fav.category}</span>
              <span className="card__shop__price">{fav.price}€</span>
              </Link>
              <div className="card__shop">
                <button className="card__shop__share">
                  <BsShareFill />
                </button>
                <button
                  fav-id={fav.id}
                  onClick={() => manageFav(fav)}
                  className="card__shop__fav"
                >
                  <MdFavoriteBorder />
                </button>
                <button
                  data-id={fav.id}
                  className="card__shop__action"
                  onClick={() => manageClick(fav)}
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
};

export default FavsProducts;
