import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useFavs from "../Hooks/useFavs";
import ProductItem from "../ProducItem/ProductItem";
import emptyCartImg from "../../images/empty_cart.png";
import "./ErrorPage.css";

const ErrorPage = () => {
  const {
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    cart,
    totalQuantity,
  } = useCart();

  const { removeHidden } = useFavs();

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

  const ListLength = cart.length;

  return (
    <>
      <Navbar
        SearchBar={false}
        isMainPage={false}
        totalQuantity={totalQuantity}
      />
      <div className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h2 className="h2">Look like you're lost</h2>
                  <Link to="/">
                    <p className="link_404">Go to Home</p>
                  </Link>
                </div>
              </div>
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
};

export default ErrorPage;
