import React from "react";
import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from "react-icons/md"
import { BsCart } from "react-icons/bs"


const IconsNavBar = (props) => {
  return (
    <>
      <Link className="nav-link fav-link" to="/favs">
        <MdFavoriteBorder className="mainPage__favIcon" />
      </Link>
      <div id="cartIcon" className="cart__icon" onClick={props.openCart}>
        <BsCart />
        <span>({props.totalQuantity})</span>
      </div>
    </>
  );
};

export default IconsNavBar;
