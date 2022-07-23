import React from "react";
import { useLocation } from "react-router-dom";
import useCart from "../Hooks/useCart";
import Navbar from "../Navbar/Navbar";
import { useEffect, useReducer } from "react";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import ProductPageItem from "./ProductPageItem/ProductPageItem";
import emptyCartImg from "../../images/empty_cart.png";
import favsReducer from "../FavsPage/FavsReducer/FavsReducer"
import "../Navbar/Navbar.css";
import "../FavsPage/FavsPage.css";
import "./ProductPage.css";

function ProductPage() {

const location = useLocation();
const product = location.state;

/* Destructuring the useCart() hook. */
  const {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    totalCart,
    totalQuantity
  } = useCart();



  /**
   * CheckCart() is a function that returns a map of the totalCart array, which is an array of objects,
   * and maps each object to a ProductItem component, which is a component that renders a product item.
   * @returns The return statement is returning the result of the map function.
   */
  const checkCart = () => {
    return totalCart.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        img={product.img}
        addQuantity={addQuantity}
        substractQuantity={substractQuantity}
        quantity={product.quantity}
        totalPrice={totalPrice}
        removeProduct={removeProduct}
      />
    ));
  };

  //Manage fav function
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("favs")) || initialState;
  };

  const [favs, dispatch] = useReducer(favsReducer, initialState, init); // add init function to the useReducer hook to initialize the state

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const manageFav = (id) => {
    const action = {
      type: "add to fav",
      payload: id,
    };
    dispatch(action);
  };

  const favorites = JSON.parse(localStorage.getItem("favs"));
  const cart = JSON.parse(localStorage.getItem("cart"));

  //function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way, even if the page is refreshed, the icon will indicate that the product is already in the cart.
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      cart.forEach((product) => {
        const cartIcon = document.querySelector(`[data-id="${product.id}"]`);
        if (cartIcon) cartIcon.classList.add("item__added__background");
      });
    }
  }, [cart]);

  //function to add the class fav__added__background to the fav icons when the products are rendered if they are already in favs. That way even if the page is refreshed, the icon will indicate that the product is already in the favs.
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      favs.forEach((fav) => {
        const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
        if (favIcon) favIcon.classList.add("fav__added__background");
      });
    }
  }, [favorites]);

  const removeHidden = () => {
    const footer = document.querySelector(".footer");
    if (footer) footer.classList.remove("hidden");
  };

  /* A ternary operator that checks if the length of the totalCart array is 0. If it is, it renders the
  Cart component with the title 'Your cart is empty' and the totalPrice is 0. If the length of the
  totalCart array is not 0, it renders the Cart component with the title '', the totalPrice is the
  totalPrice of the cart, and the productItem is the result of the checkCart() function. */
  const ListLength = totalCart.length;
  return (
    <>
      <div id="productPage" className="productPage__wrapper">
        <Navbar
          SearchBar={false}
          isMainPage={false}
          totalQuantity={totalQuantity}
        />
       <div className="productPageItem__container">
         <ProductPageItem
          product={product}
          manageClick={addToCart}
          manageFav={manageFav}
               />
       </div>

      </div>
      {ListLength === 0 ? (
        <Cart
          removeHidden={removeHidden}
          title={"Your cart is empty."}
          totalPrice={0}
          emptyCartImg={
            <img
              className="empty__cart"
              src={emptyCartImg}
              alt="Sad empty cart"
            />
          }
        />
      ) : (
        <Cart
          removeHidden={removeHidden}
          title={""}
          totalPrice={totalPrice}
          productItem={checkCart()}
        />
      )}
    </>
  );
}

export default ProductPage;
