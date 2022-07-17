import React from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri"
import "./cart.css";

const Cart = ({ title, totalPrice, productItem, emptyCartImg }) => {

/* Adding an event listener to the mainPage and loginPage. When the user clicks on the mainPage or
loginPage, the cart will close. */
  const mainPage = document.getElementById("mainPage");
  if (mainPage){
    mainPage.addEventListener("click", ()=>{
      closeCart();
    })
  }

  const loginPage = document.getElementById("loginPage");
  if (loginPage){
    loginPage.addEventListener("click", ()=>{
      closeCart();
    })
  }

  //Function to close the cart when click on close icon
  const closeCart = () => {
    const cart = document.getElementById("cart");
    const mainPage = document.getElementById("mainPage");
    const loginPage = document.getElementById("loginPage");
    cart.classList.remove("cart-open");
    if (mainPage) mainPage.classList.remove("blur");
    if(loginPage) loginPage.classList.remove("blur");
  }


  return (
    <>
      <div id="cart" className="cart">
        <div className="close-icon__container">
          <h3>Shopping Cart</h3>
          <RiCloseFill onClick={closeCart} />
        </div>
        <div className="cart__message">
          <h5>CAN'T GET YOUR DISCOUNT?</h5>
          <p>Log in to enjoy your discount on all products in the next step.</p>
        </div>
            <div className="table-content">
            <span className="products__banner">Sneakers</span>
              <p>{title}</p>
                {emptyCartImg}
                {productItem}
            </div>
        <div className="totalPrice__container">
          <h3 className="totalPrice">Total: {totalPrice}€</h3>
          <hr></hr>
            <div className="checkout-container">
              <Link className="btn btn-primary btn-block btn-lg checkout" to="/login">Checkout</Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
