import React from 'react'
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";



const CheckoutButton = () => {

  const { isAuthenticated } = useAuthContext();

  return (
    <Link className="btn btn-primary btn-block btn-lg checkout" to={isAuthenticated ? '/private/checkout' : '/login'}>Checkout</Link>
  )
}

export default CheckoutButton