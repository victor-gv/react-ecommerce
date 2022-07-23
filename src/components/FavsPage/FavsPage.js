import React from "react";
import useCounterCart from "../Hooks/useCounterCart";
import useSearch from "../Hooks/useSearch";
import Navbar from "../Navbar/Navbar";
import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import emptyCartImg from "../../images/empty_cart.png";
import FavsProducts from "../FavsProducts/FavsProducts";
import favsReducer from "./FavsReducer/FavsReducer"
import noResult from "../../images/no-results.png";
import "../Navbar/Navbar.css";
import "./FavsPage.css";

function FavsPage() {

/* Destructuring the useCounterCart() and useSearch() hooks. */
  const {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    totalCart,
    setData,
    totalQuantity
  } = useCounterCart();

  const { searchItem } = useSearch();

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
      type: "delete from fav",
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
  const favsLength = favs.length;
  return (
    <>
      <div id="favPage" className="favPage__wrapper">
        <Navbar
          SearchBar={true}
          manageChange={searchItem}
          isMainPage={false}
          totalQuantity={totalQuantity}

        />
        {favsLength === 0 ? (
          <FavsProducts
            initialState={favs}
            manageClick={addToCart}
            manageFav={manageFav}
            emptyMessage={`Your favorites are empty.`}
            homePage={
              <Link to="/">
                <AiOutlineHome />
              </Link>
            }
          />
        ) : (
          <>
            <FavsProducts
              initialState={favs}
              manageClick={addToCart}
              manageFav={manageFav}
              emptyMessage={""}
            />
            <div id="emptySearch" className="hidden">
              <img src={noResult} alt="No found sticker" />
              <h4>No results found</h4>
            </div>
          </>
        )}
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

export default FavsPage;
