import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import emptyCartImg from "../../images/empty_cart.png";
import noResult from "../../images/no-results.png";
import useFavs from "../Hooks/useFavs";
import useCart from "../Hooks/useCart";
import useSearch from "../Hooks/useSearch";
import "./MainPage.css";

function MainPage() {
  /* Destructuring the useCart() and useSearch() hooks. */
  const {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    cart,
    totalPrice,
    totalQuantity
  } = useCart();

  const { searchItem } = useSearch();
  const { manageFav } = useFavs();
  


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
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div className="mainPage__wrapper">
        <div className="mainPage" id="mainPage">
          <Container fluid>
            <Row>
              <Navbar
                SearchBar={true}
                isMainPage={true}
                IconsNavbar={true}
                manageChange={searchItem}
                totalQuantity={totalQuantity}
              />
            </Row>
          </Container>
          <Row>
            <Col xs="10" className="products__wrapper">
              <Products manageClick={addToCart} manageFav={manageFav} />
              <div id="emptySearch" className="hidden">
                <img src={noResult} alt="No found sticker" />
                <h4>No results found</h4>
              </div>
            </Col>
          </Row>
        </div>
        <Row>
          <Col>
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
              />
            )}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default MainPage;
