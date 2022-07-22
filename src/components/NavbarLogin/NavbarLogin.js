import React from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"
import { BsCart } from "react-icons/bs"
import "./NavbarLogin.css";




function NavbarLogin(props) {

/* Removing the class hidden from the footer when the user comes from favPage */
  const footer = document.getElementById("footer");
  if (footer) footer.classList.remove("hidden");

    //Function for responsive navbar
    const menuToggle = () => {
      const MenuItems = document.getElementById('MenuItemsLogin');
  
      if (MenuItems.style.maxHeight === '0px') {
        MenuItems.style.maxHeight = '200px';
      } else {
        MenuItems.style.maxHeight = '0px';
      }
    }
  
    //Function to open the cart when click on cart icon
    const openCart = () => {
      const cart = document.getElementById("cart");
      const loginPage = document.getElementById("loginPage");
      const favPage = document.getElementById("favPage");
      const footer = document.getElementById("footer");
      
      if (loginPage) loginPage.classList.add("blur");
      if (favPage) favPage.classList.add("blur");
      if (cart) cart.classList.add("cart-open");
      if (footer) footer.classList.add("hidden");
    }

  return (
    <>
      <div className="navbarLogin-container">
      <div className="navLogin">
        <div className="login__logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo of the page"
            />
          </Link>
        </div>

        <nav>
          <ul id="MenuItemsLogin" className="login__menu-items">
            <li>
            <Link className='login__nav-link' to="/">Home</Link>
            </li>
            <li>
            <Link className='login__nav-link' to="/">Categories</Link>
            </li>
            <li>
            <Link className='login__nav-link login__icon' to="/login">Login <FaUserCircle /></Link>
            </li>
          </ul>
        </nav>
          <Link className='login__nav-link' to="/favs"><MdFavoriteBorder className="login__favIcon"/></Link>
        <div id="cartIcon" className="login__cart--icon" onClick={openCart}>
        <BsCart />
          <span>({props.totalQuantity})</span>
        </div>
        <img
          src="https://i.ibb.co/6XbqwjD/menu.png"
          alt=""
          className="login__menu-icon"
          onClick={menuToggle}
        />
      </div>
      </div>
    </>

  );
}

export default NavbarLogin;
