import React from "react";
import Navbar from "../Navbar/Navbar"

const PrivateArea = () => {


  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar
        SearchBar={false}
        isMainPage={false}
        IconsNavbar={false}
      />
      <div>Hello, {user} </div>
    </>
  );
};

export default PrivateArea;
