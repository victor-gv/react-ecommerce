import React from "react";
import Navbar from "../Navbar/Navbar"
import useCart from "../Hooks/useCart";
import ProductItem from "../ProducItem/ProductItem";
import Cart from "../Cart/Cart";
import emptyCartImg from "../../images/empty_cart.png";
import useFavs from "../Hooks/useFavs";
import useShare from "../Hooks/useShare";
  

const PrivateArea = () => {


    /* Destructuring the useCart hook. */
    const {
      addQuantity,
      substractQuantity,
      removeProduct,
      totalPrice,
      cart,
      totalQuantity,
    } = useCart();

const { manageShare } = useShare();


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
          IconsNavbar={true}
          totalQuantity={totalQuantity}
      />
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
          <Cart title={""} totalPrice={totalPrice} productItem={checkCart()} />
        )}
    </>
  );
};

export default PrivateArea;
