import React from "react";
import "./cart.css";

const Cart = ({ title, totalPrice, productItem }) => {
  return (
    <>
      <div className="cart">
        <hr></hr>
        <h1>Shopping Cart</h1>
        <hr></hr>
        <h3>{title}</h3>
        {productItem}
        <hr></hr>
        <h2>Total: {totalPrice}€</h2>
        <hr></hr>
        <button className="btn btn-primary btn-block btn-lg checkout">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
