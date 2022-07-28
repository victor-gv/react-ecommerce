import React from "react";
import { useLocation, Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import ProductPageItem from "./ProductPageItem/ProductPageItem";
import ProductRelated from "./ProductRelated/ProductRelated"
import emptyCartImg from "../../images/empty_cart.png";
import useFavs from "../Hooks/useFavs";
import "../Navbar/Navbar.css";
import "../FavsPage/FavsPage.css";
import "./ProductPage.css";

function ProductPage() {
  const location = useLocation();
  const product = location.state;


  /* Destructuring the useCart() hook. */
  const {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    totalCart,
    totalQuantity,
  } = useCart();


  const { manageFav, removeHidden } = useFavs();


  /**
   * CheckCart() is a function that returns a map of the totalCart array, which is an array of objects,
   * and maps each object to a ProductItem component, which is a component that renders a product item.
   * @returns The return statement is returning the result of the map function.
   */
  const checkCart = () => {
    return totalCart.map((product) => (
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
  const ListLength = totalCart.length;
  return (
    <>
      <div id="productPage" className="productPage__wrapper">
        <Navbar
          SearchBar={false}
          isMainPage={false}
          totalQuantity={totalQuantity}
        />
        <div className="productPageItem__container">
          <ProductPageItem
            product={product}
            manageClick={addToCart}
            manageFav={manageFav}
          />
        </div>

        {/* Related products */}
        <div className="related-products">
          <div className="small-container">
            <div className="row row-2">
              <h2>Related Products</h2>
              <Link to="/">
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
          removeHidden={removeHidden}
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
          removeHidden={removeHidden}
          title={""}
          totalPrice={totalPrice}
          productItem={checkCart()}
        />
      )}
    </>
  );
}

export default ProductPage;
