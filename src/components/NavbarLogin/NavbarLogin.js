import React from "react";
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import "./NavbarLogin.css";




function NavbarLogin(props) {

    //Function for responsive navbar
    const menuToggle = () => {
      const MenuItems = document.getElementById('MenuItems');
  
      if (MenuItems.style.maxHeight === '0px') {
        MenuItems.style.maxHeight = '200px';
      } else {
        MenuItems.style.maxHeight = '0px';
      }
    }
  
    //Function to open the cart when click on cart icon
    const openCart = () => {
      const cart = document.getElementById("cart");
  
      cart.classList.add("cart-open");
    }

  return (
    <>
      <div className="navbar-container">
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Logo of the page"
            />
          </Link>
        </div>

        <nav>
          <ul id="MenuItems" className="menu-items">
            <li>
            <Link className='nav-link' to="/">Home</Link>
            </li>
            <li>
            <Link className='nav-link' to="/">Categories</Link>
            </li>
            <li>
            <Link className='nav-link' to="/">About</Link>
            </li>
            <li>
            <Link className='nav-link' to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div id="cartIcon" className="cart__icon" onClick={openCart}>
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
          className="menu-icon"
          onClick={menuToggle}
        />
      </div>
      </div>
    </>

  );
}

export default NavbarLogin;
