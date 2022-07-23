import React from "react";
import { useEffect, useState, useReducer } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import NavbarMain from "../NavbarMain/NavbarMain";
import { Container, Row, Col } from "react-bootstrap";
import emptyCartImg from "../../images/empty_cart.png";
import noResult from "../../images/no-results.png";
import favsReducer from "../FavsReducer/FavsReducer";
import useCounterCart from "../Hooks/useCounterCart";
import "./MainPage.css";

function MainPage() {

  const { addQuantity, substractQuantity, removeProduct, totalPrice, totalCart, setData, totalQuantity, setTotalQuantity} = useCounterCart();



  

  //Obtain the product data from the Products component and pass it to the Cart component
  const addToCart = (product) => {
    //Check if the product is already in the cart. If so, don't add it again.
    if (totalCart.find((item) => item.id === product.id)) {
      //If the product is already in the cart and the user clicks on the buy button again, we open the cart to let the user add more quantity of the product.
      const mainPage = document.getElementById("mainPage");
      const footer = document.getElementById("footer");
      const cart = document.getElementById("cart");
      cart.classList.add("cart-open");
      mainPage.classList.add("blur");
      footer.classList.add("hidden");
      return;
    }
    //Add the product to the cart
    const cartIcon = document.getElementById("cartIcon");

    const cardShopAction = document.querySelector(`[data-id="${product.id}"]`);
    cardShopAction.classList.add("item__added");


    cartIcon.classList.add("product__added");
    setTimeout(() => {
      cartIcon.classList.remove("product__added");
    }, 500);
    setData([...totalCart, product]);
  };

 



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

  const [favs, dispatch] = useReducer(favsReducer, initialState, init);// add init function to the useReducer hook to initialize the state

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const manageFav = (favs) => {
    const action = {
      type: "add to fav",
      payload: favs
    };
    dispatch(action);
  };


  /* A ternary operator that checks if the length of the totalCart array is 0. If it is, it renders the
Cart component with the title 'Your cart is empty' and the totalPrice is 0. If the length of the
totalCart array is not 0, it renders the Cart component with the title '', the totalPrice is the
totalPrice of the cart, and the productItem is the result of the checkCart() function. */
  const ListLength = totalCart.length;
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="mainPage__wrapper">
        <div className="mainPage" id="mainPage">
          <Container fluid>
            <Row>
              <NavbarMain
                totalQuantity={totalQuantity}
              />
            </Row>
          </Container>
          <Row>
            <Col className="products__wrapper">
              <Products manageClick={addToCart} manageFav={manageFav} />
              <div id="emptySearch" className="hidden">
                <img src={noResult} alt="No found sticker" />
                <h4>No results found</h4>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MainPage;
