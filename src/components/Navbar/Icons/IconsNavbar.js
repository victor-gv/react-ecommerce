import React from "react";
import { useAuthContext } from "../../../context/authContext";
import { Link } from 'react-router-dom'
import { MdFavoriteBorder } from "react-icons/md"
import { BsCart } from "react-icons/bs"


const IconsNavBar = (props) => {
  const { isAuthenticated } = useAuthContext();


  return (
    <>
      <Link className="nav-link fav-link" to={isAuthenticated ? '/private/favs' : '/favs'}>
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
