import React from "react";
import { useAuthContext } from "../../context/authContext";
import Alert from "@mui/material/Alert";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useShare = () => {
    const MySwal = withReactContent(Swal)

  const { isAuthenticated } = useAuthContext();

  const manageShare = (product) => {
    const url = isAuthenticated
      ? `http://localhost:3000/private/product/${product.id}`
      : `http://localhost:3000/product/${product.id}`;
    navigator.clipboard.writeText(url);

    MySwal.fire({
        position: 'center',
        icon: 'success',
        title: 'Product link copied to clipboard',
        showConfirmButton: false,
        timer: 1500
      })
  };

  return {
    manageShare,
  };
};

export default useShare;
