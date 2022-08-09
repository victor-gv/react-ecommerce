import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import ProductPageItem from "./ProductPageItem/ProductPageItem";
import ProductRelated from "./ProductRelated/ProductRelated";
import emptyCartImg from "../../images/empty_cart.png";
import useFavs from "../Hooks/useFavs";
import useShare from "../Hooks/useShare";
import "../Navbar/Navbar.css";
import "../FavsPage/FavsPage.css";
import "./ProductPage.css";

function ProductPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { isAuthenticated } = useAuthContext();



  /* Destructuring the useCart() hook. */
  const {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    cart,
    totalQuantity,
  } = useCart();

  const { manageFav, favs } = useFavs();
  const { manageShare } = useShare();

  useEffect(() => {
    getProduct();
  }
  , [params]);


const getProduct = async () => {
  try {
    const response = await fetch(`http://localhost:5000/products/${params.id}`);
    if (response.ok) {
      const product = await response.json();
      setProduct(product);
    } else {
      navigate("/error");
    }
  } catch (error) {
    console.log(error);
  }
}





  //function to add the class fav__added__background to the fav icons when the products are rendered if the product is already in favs.
  useEffect(() => {
    const favIcon = document.querySelector(`[fav-id="${product.id}"]`);
    if (favs) {
      //Check if the product is in the favs, if it is, add the class fav__added__background to the fav icon.
      if (favs.find((fav) => fav.id === product.id)) {
        if (favIcon) favIcon.classList.add("fav__added__background");
      } else {
        if (favIcon) favIcon.classList.remove("fav__added__background");
      }
    }
  }, [product, favs]);


  //function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way even if the page is refreshed, the icon will indicate that the product is already in the cart.
  useEffect(() => {
    const cartIcon = document.querySelector(`[data-id="${product.id}"]`);
    if (cart) {
      if (cart.find((item) => item.id === product.id)) {
        if (cartIcon) cartIcon.classList.add("item__added__background");
      } else {
        if (cartIcon) cartIcon.classList.remove("item__added");
        if (cartIcon) cartIcon.classList.remove("item__added__background");
      }
    }
  }, [product, cart]);

  /**
   * CheckCart() is a function that returns a map of the totalCart array, which is an array of objects,
   * and maps each object to a ProductItem component, which is a component that renders a product item.
   * @returns The return statement is returning the result of the map function.
   */
  const checkCart = () => {
    return cart.map((product) => (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        img={product.img}
        addQuantity={addQuantity}
        substractQuantity={substractQuantity}
        quantity={product.quantity}
        totalPrice={totalPrice}
        removeProduct={removeProduct}
      />
    ));
  };

  /* A ternary operator that checks if the length of the totalCart array is 0. If it is, it renders the
  Cart component with the title 'Your cart is empty' and the totalPrice is 0. If the length of the
  totalCart array is not 0, it renders the Cart component with the title '', the totalPrice is the
  totalPrice of the cart, and the productItem is the result of the checkCart() function. */
  const ListLength = cart.length;
  return (
    <>
      <div id="productPage" className="productPage__wrapper">
        <Navbar
          SearchBar={false}
          isMainPage={false}
          IconsNavbar={true}
          totalQuantity={totalQuantity}
        />
        <div className="productPageItem__container">
          <ProductPageItem
            product={product}
            manageClick={addToCart}
            manageFav={manageFav}
            manageShare={manageShare}
          />
        </div>

        {/* Related products */}
        <div className="related-products">
          <div className="small-container">
            <div className="row row-2">
              <h2>Related Products</h2>
              <Link className="nav-link" to={isAuthenticated ? '/private/home' : '/'}>
                <p>View more</p>
              </Link>
            </div>
          </div>
          <div className="small-container">
            <div className="row">
              <ProductRelated />
            </div>
          </div>
        </div>
      </div>
      {ListLength === 0 ? (
        <Cart
          title={"Your cart is empty."}
          totalPrice={0}
          emptyCartImg={
            <img
              className="empty__cart"
              src={emptyCartImg}
              alt="Sad empty cart"
            />
          }
        />
      ) : (
        <Cart
          title={""}
          totalPrice={totalPrice}
          productItem={checkCart()}
          checkoutBtn={true}
        />
      )}
    </>
  );
}

export default ProductPage;
