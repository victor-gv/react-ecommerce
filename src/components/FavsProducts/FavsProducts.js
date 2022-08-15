import React from "react";
import { useAuthContext } from "../../context/authContext";
import { Link } from 'react-router-dom';
import useSearch from "../Hooks/useSearch";
import noResult from "../../images/no-results.png";
import ProductCard from "../ProductCard/ProductCard";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import "./FavsProducts.css";
import "../Products/Products.css";

const FavsProducts = ({initialState = [], manageFav, manageClick, manageShare, emptyMessage, homePage}) => {
const favs = initialState;

const { filter } = useSearch();
const { isAuthenticated } = useAuthContext();


let renderedProducts;

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
        {renderedProducts = favs
         .filter((product) => {
          const match = product.title
            .toLowerCase()
            .includes(filter.toLowerCase());
          if (!filter) return true;
          return match;
        })
        .map((fav) => (
          <ProductCard key={fav.id}>
            <div data-fav={fav.id} className="card">
            <Link to={isAuthenticated ? `/private/product/${fav.title}` : `/product/${fav.title}`}>
              <img src={fav.img} alt={`${fav.title} sneaker`} />
              <h4 className="card__title">{fav.title}</h4>
              <span className="card__description">{fav.category}</span>
              <span className="card__shop__price">{fav.price}€</span>
              </Link>
              <div className="card__shop">
                <button 
                  className="card__shop__share"
                  onClick={() => manageShare(fav)}
                  >
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
                {renderedProducts.length === 0 && filter !== "" ? (
          <div id="emptySearch" className="empty-alert">
            <img src={noResult} alt="No found sticker" />
            <h4>No results found</h4>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default FavsProducts;
