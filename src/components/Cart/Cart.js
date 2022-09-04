import React from "react";
import { RiCloseFill } from "react-icons/ri"
import "./cart.css";
import CheckoutButton from "./CheckoutButton/CheckoutButton";

const Cart = ({ title, totalPrice, productItem, emptyCartImg, checkoutBtn }) => {


/* Adding an event listener to the mainPage and loginPage. When the user clicks on the mainPage,
loginPage or favPage while the cart is open, the cart will close. */
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

  const favPage = document.getElementById("favPage");
  if (favPage){
    favPage.addEventListener("click", ()=>{
      closeCart();
    })
  }

  const productPage = document.getElementById("productPage");
  if (productPage){
    productPage.addEventListener("click", ()=>{
      closeCart();
    })
  }

  const sneakersPage = document.getElementById("sneakersPage");
  if (sneakersPage){
    sneakersPage.addEventListener("click", ()=>{
      closeCart();
    }
    )
  }

  const clothesPage = document.getElementById("clothesPage");
  if (clothesPage){
    clothesPage.addEventListener("click", ()=>{
      closeCart();
    }
    )
  }

  const removeHidden = () => {
    const footer = document.querySelector(".footer");
    if (footer) footer.classList.remove("hidden");
  };

  //Function to close the cart when click on close icon
  const closeCart = () => {
    const cart = document.getElementById("cart");
    const mainPage = document.getElementById("mainPage");
    const loginPage = document.getElementById("loginPage");
    const favPage = document.getElementById("favPage");
    const productPage = document.getElementById("productPage");
    const sneakersPage = document.getElementById("sneakersPage");
    const clothesPage = document.getElementById("clothesPage");
    const footer = document.getElementById("footer");
    cart.classList.remove("cart-open");
    if (mainPage) mainPage.classList.remove("blur");
    if (loginPage) loginPage.classList.remove("blur");
    if (favPage) favPage.classList.remove("blur");
    if (productPage) productPage.classList.remove("blur");
    if (sneakersPage) sneakersPage.classList.remove("blur");
    if (clothesPage) clothesPage.classList.remove("blur");
    if (footer) footer.classList.remove("hidden");
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
            <span className="products__banner">Your purchase</span>
              <p>{title}</p>
                {emptyCartImg}
                {productItem}
            </div>
        <div className="totalPrice__container">
          <h3 className="totalPrice">Total: {
            totalPrice % 1 === 0 ? totalPrice :
            Number(totalPrice).toFixed(2)
            }€
          </h3>
          <hr></hr>
            <div className="checkout-container">
              {checkoutBtn ? <CheckoutButton onClick={removeHidden} /> : null}
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
