import React from "react";
import SearchBar from './SearchBar/SearchBar'
import logo from "../../images/logo.png";
import { FaUserCircle } from "react-icons/fa"
import { MdFavoriteBorder } from "react-icons/md"
import { BsCart } from "react-icons/bs"
import { Link } from 'react-router-dom';
import "./NavbarMain.css";

function NavbarMain(props) {

  //Search function
  const searchItem = () => {
    const search = document.getElementById("search").value;
    const products = document.querySelectorAll(".card");

    //Prevent refreshing the page when the user press enter key in the search bar
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    /* A function that filters the products and renders only the ones that match the search. */
    products.forEach((product) => {
      //We take into account only the title of the product and the price of the product, but not the text of the buy button to match the search.
      const title = product.querySelector(".card__title").innerText;
      const price = product.querySelector(".card__shop__price").innerText;
      const emptySearch = document.getElementById("emptySearch");

      if (
        title.toLowerCase().includes(search.toLowerCase()) ||
        price.includes(search)
      ) {
        product.style.display = "block";
        product.setAttribute("matched", "true");
      } else {
        product.style.display = "none";
        product.setAttribute("matched", "false");
      }

      const unMatchedProducts = document.querySelectorAll("[matched='false']");
      //If all the products have the attribute matched set to false, we toggle the display of the emptySearch div to display the message "No results found".
      if (unMatchedProducts.length === products.length) {
        emptySearch.classList.add("empty-alert");
        emptySearch.classList.remove("hidden");
      } else {
        emptySearch.classList.add("hidden");
        emptySearch.classList.remove("empty-alert");
      }
    });
  };


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
        <SearchBar manageChange = {searchItem} />
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
