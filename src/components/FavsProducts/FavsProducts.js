import React from "react";
import { useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { BsHandbagFill, BsShareFill } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import "./FavsProducts.css";
import "../Products/Products.css";

const FavsProducts = (props) => {
  const favs = JSON.parse(localStorage.getItem("favs"));
  const cart = JSON.parse(localStorage.getItem("cart"));

  //function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way even if the page is refreshed, the icon will indicate that the product is already in the cart.
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      cart.forEach((product) => {
        const cartIcon = document.querySelector(`[data-id="${product.id}"]`);
        if (cartIcon) cartIcon.classList.add("item__added__background");
      });
    }
  }, [cart]);

  //function to add the class fav__added__background to the fav icons when the products are rendered if they are alreadthe icon will in
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      favs.forEach((fav) => {
        const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
        if (favIcon) favIcon.classList.add("fav__added__background");
      });
    }
  }, [favs]);

  return (
    <>
      <div className="title__row--favs">
        <h2 className="products__title">Favorites</h2>
      </div>
      <div className="products__container">
        {favs.map((fav) => (
          <ProductCard key={fav.id}>
            <div data-fav={fav.id} className="card">
              <img src={fav.img} alt={`${fav.title} sneaker`} />
              <h4 className="card__title">{fav.title}</h4>
              <span className="card__description">Summer outfits</span>
              <span className="card__shop__price">{fav.price}€</span>
              <div className="card__shop">
                <button className="card__shop__share">
                  <BsShareFill />
                </button>
                <button
                  fav-id={fav.id}
                  onClick={() => props.addToFav(fav)}
                  className="card__shop__fav"
                >
                  <MdFavoriteBorder />
                </button>
                <button
                  data-id={fav.id}
                  className="card__shop__action"
                  onClick={() => props.manageClick(fav)}
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
