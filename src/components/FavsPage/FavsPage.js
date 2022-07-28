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
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    totalCart,
    totalQuantity
  } = useCart();

  const { searchItem } = useSearch();
  const { manageFav, removeHidden, favs } = useFavs();

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
