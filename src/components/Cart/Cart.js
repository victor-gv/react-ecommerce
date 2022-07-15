import React from "react";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri"
import "./cart.css";

const Cart = ({ title, totalPrice, productItem, emptyCartImg }) => {

  //Function to close the cart when click on close icon
  const closeCart = () => {
    const cart = document.getElementById("cart");
    const mainPage = document.getElementById("mainPage");
    cart.classList.remove("cart-open");
    mainPage.classList.remove("blur");
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
