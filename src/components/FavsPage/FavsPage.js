import React from "react";
import useCart from "../Hooks/useCart";
import useSearch from "../Hooks/useSearch";
import useFavs from "../Hooks/useFavs";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import emptyCartImg from "../../images/empty_cart.png";
import FavsProducts from "../FavsProducts/FavsProducts";
import noResult from "../../images/no-results.png";
import "../Navbar/Navbar.css";
import "./FavsPage.css";

function FavsPage() {

/* Destructuring the useCart() and useSearch() hooks. */
  const {
    cart,
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    totalQuantity
  } = useCart();

  const { searchItem } = useSearch();
  const { manageFav, removeHidden, favs } = useFavs();


  
  const checkCart = () => {
    return cart.map((product) => (
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



  const ListLength = cart.length;
  const favsLength = favs.length;
  return (
    <>
      <div id="favPage" className="favPage__wrapper">
        <Navbar
          SearchBar={true}
          manageChange={searchItem}
          isMainPage={false}
          IconsNavbar={true}
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
