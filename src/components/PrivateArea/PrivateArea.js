import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"

const PrivateArea = () => {


  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <>
      <Navbar
        SearchBar={false}
        isMainPage={false}
        IconsNavbar={false}
      />
      <div>PrivateArea</div>
      <div>Hello, {user} </div>
      <Link to="/private/logout">Logout</Link>
    </>
  );
};

export default PrivateArea;
