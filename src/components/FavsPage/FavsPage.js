import React, { useEffect } from "react";
import { useAuthContext } from "../../context/authContext";
import { Row, Col } from "react-bootstrap";
import useCart from "../Hooks/useCart";
import useSearch from "../Hooks/useSearch";
import useFavs from "../Hooks/useFavs";
import useShare from "../Hooks/useShare";
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

  const { isAuthenticated } = useAuthContext();


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
  const { manageFav, favs } = useFavs();
  const { manageShare } = useShare();

  //function to add the class fav__added__background to the fav icons when the products are rendered if they are alreadthe icon will in
  useEffect(() => {
    if (favs) {
      favs.forEach((fav) => {
        const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
        if (favIcon) favIcon.classList.add("fav__added__background");
      }
      );
    }
  }
  , [favs]);


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
            manageShare={manageShare}
            emptyMessage={`Your favorites are empty.`}
            homePage={
              <Link to={isAuthenticated ? '/private/home' : '/'}>
                <AiOutlineHome />
              </Link>
            }
          />
        ) : (
          <>
            <Row>
              <Col xs="11">
                <FavsProducts
                  initialState={favs}
                  manageClick={addToCart}
                  manageFav={manageFav}
                  manageShare={manageShare}
                  emptyMessage={""}
                />
                <div id="emptySearch" className="hidden">
                  <img src={noResult} alt="No found sticker" />
                  <h4>No results found</h4>
                </div>
              </Col>
            </Row>
          </>
        )}
      </div>
      {ListLength === 0 ? (
        <Cart
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
          title={""}
          totalPrice={totalPrice}
          productItem={checkCart()}
        />
      )}
    </>
  );
}

export default FavsPage;
