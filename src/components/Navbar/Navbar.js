import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import logo from "../../images/black_logo.png";
import IconsNavbar from "./Icons/IconsNavbar";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuthContext } from "../../context/authContext";

function Navbar(props) {

  const {isAuthenticated} = useAuthContext();
  const user = JSON.parse(localStorage.getItem("user"));

  //Function for responsive navbar
  const menuToggle = () => {
    const MenuItems = document.getElementById("MenuItems");

    if (MenuItems.style.maxHeight === "0px") {
      MenuItems.style.maxHeight = "200px";
    } else {
      MenuItems.style.maxHeight = "0px";
    }
  };

  //Function to open the cart when click on cart icon
  const openCart = () => {
    const cart = document.getElementById("cart");
    const mainPage = document.getElementById("mainPage");
    const loginPage = document.getElementById("loginPage");
    const favPage = document.getElementById("favPage");
    const productPage = document.getElementById("productPage");
    const footer = document.getElementById("footer");

    if (mainPage) mainPage.classList.add("blur");
    if (loginPage) loginPage.classList.add("blur");
    if (favPage) favPage.classList.add("blur");
    if (productPage) productPage.classList.add("blur");
    if (cart) cart.classList.add("cart-open");
    if (footer) footer.classList.add("hidden");
  };

  return (
    <>
      <div
        className={`navbar-container ${
          props.isMainPage ? "" : "navbar-container__static"
        }`.trimEnd()}
      >
        <div className="nav">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo of the page" />
            </Link>
          </div>
          {props.SearchBar ? (
            <SearchBar manageChange={props.manageChange} />
          ) : null}
          <nav>
            <ul id="MenuItems" className="menu-items">
              <li>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Categories
                </Link>
              </li>
              {isAuthenticated ? (
                <li className="login__icon">
                  <p>Hi, {user}</p>
                  <FaUserCircle />
                </li>
              ) : (
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          {props.IconsNavbar ? (
            <IconsNavbar
              openCart={openCart}
              totalQuantity={props.totalQuantity}
            />
          ) : null}
          <AiOutlineMenu className="menu-icon" onClick={menuToggle} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
