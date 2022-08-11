import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ProductItem from "../ProducItem/ProductItem";
import useFetch from "../Hooks/useFetch";
import useFavs from "../Hooks/useFavs";
import useCart from "../Hooks/useCart";
import useSearch from "../Hooks/useSearch";
import useShare from "../Hooks/useShare";
import Cart from "../Cart/Cart";
import emptyCartImg from "../../images/empty_cart.png";
import { Row, Col } from "react-bootstrap";
import "../ProductCard/ProductCard.css"
import "../MainPage/MainPage.css";
import "../Products/Products.css";
import SneakersItems from "./SneakersItems/SneakersItems";

const Sneakers = () => {
  const { products } = useFetch();

  /* Destructuring the useCart() and useSearch() hooks. */
  const {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    cart,
    totalPrice,
    totalQuantity,
  } = useCart();

  const { manageFav, favs } = useFavs();
  const { searchItem } = useSearch();
  const { manageShare } = useShare();

  //function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way even if the page is refreshed, the icon will indicate that the product is already in the cart.
  useEffect(() => {
    if (cart) {
      cart.forEach((product) => {
        const cartIcon = document.querySelector(`[data-id="${product.id}"]`);
        if (cartIcon) cartIcon.classList.add("item__added__background");
      });
    }
  }, [cart, products]);

  //function to add the class fav__added__background to the buy icon when the products are rendered if they are already in favs. That way even if the page is refreshed, the icon will indicate that the product is already in favs.
  useEffect(() => {
    if (favs) {
      favs.forEach((fav) => {
        const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
        if (favIcon) favIcon.classList.add("fav__added__background");
      });
    }
  }, [favs, products]);

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
        totalPrice={totalPrice}
        removeProduct={removeProduct}
        quantity={product.quantity}
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
      <Navbar
        SearchBar={true}
        manageChange={searchItem}
        isMainPage={false}
        IconsNavbar={true}
        totalQuantity={totalQuantity}
      />
      <div>
          <Row>
            <Col id="sneakersPage" className="products__wrapper" xs="11">
              <SneakersItems
                manageClick={addToCart}
                manageFav={manageFav}
                manageShare={manageShare}
                title="Sneakers"
              />
            </Col>
          </Row>
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
};

export default Sneakers;
