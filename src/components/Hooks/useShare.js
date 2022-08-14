import { useAuthContext } from "../../context/authContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const useShare = () => {
    const MySwal = withReactContent(Swal)

  const { isAuthenticated } = useAuthContext();

  const manageShare = (product) => {
    const url = isAuthenticated
      ? `https://shophub20.netlify.app/private/product/${product.id}`
      : `https://shophub20.netlify.app/product/${product.id}`;
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
