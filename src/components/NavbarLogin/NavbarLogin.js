import React from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa"
import "./NavbarLogin.css";




function NavbarLogin(props) {

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
      const footer = document.getElementById("footer");
      
      if (loginPage) loginPage.classList.add("blur");
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
            <Link className='login__nav-link' to="/favs">Favorites</Link>
            </li>
            <li>
            <Link className='login__nav-link login__icon' to="/login">Login  <FaUserCircle /></Link>
            </li>
          </ul>
        </nav>
        <div id="cartIcon" className="login__cart--icon" onClick={openCart}>
          <img
            src="https://i.ibb.co/PNjjx3y/cart.png"
            alt=""
            width="30px"
            height="30px"
          />
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
