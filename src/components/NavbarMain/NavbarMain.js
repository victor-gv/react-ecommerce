import React from "react";
import logo from "../../images/logo.png";
import { FaUserCircle } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"
import { BsCart } from "react-icons/bs"
import {Form, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./NavbarMain.css";

function NavbarMain(props) {

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
    const mainPage = document.getElementById("mainPage");
    const footer = document.getElementById("footer");
    const cart = document.getElementById("cart");
    
    cart.classList.add("cart-open");
    if (mainPage) mainPage.classList.add("blur");
    footer.classList.add("hidden");
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
            <Link className='login__nav-link login__icon' to="/login">Login <FaUserCircle /></Link>
            </li>
          </ul>
        </nav>
        <div className="search-form">
          <Form id="searchForm" className="d-flex">
            <FormControl
              id='search'
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={() => props.manageChange()}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
        <Link className='nav-link' to="/favs"><MdFavoriteBorder className="mainPage__favIcon"/></Link>
        <div id="cartIcon" className="cart__icon" onClick={openCart}>
          <BsCart />
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
      <hr></hr>
    </>

  );
}

export default NavbarMain;
