import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

const PrivateArea = () => {

  
/* Destructuring the useCart hook. */


  return (
    <>
      <Navbar
        SearchBar={false}
        isMainPage={false}
        IconsNavbar={false}
      />
      <div>PrivateArea</div>
      <Link to="/private/logout">Logout</Link>
    </>
  );
};

export default PrivateArea;
