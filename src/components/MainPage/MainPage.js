import React, { useEffect } from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import Navbar from "../Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import emptyCartImg from "../../images/empty_cart.png";
import frontPage1 from "../../images/front-page_1.jpg"
import frontPage2 from "../../images/front-page_2.jpg"
import frontPage3 from "../../images/front-page_3.jpg"
import useFavs from "../Hooks/useFavs";
import useCart from "../Hooks/useCart";
import useSearch from "../Hooks/useSearch";
import useFetch from "../Hooks/useFetch";
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

  const { products } = useFetch();
  const { manageFav, favs } = useFavs();
  const { searchItem } = useSearch();



    //function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way even if the page is refreshed, the icon will indicate that the product is already in the cart.
    useEffect(() => {
      if (cart) {
        cart.forEach((product) => {
          const cartIcon = document.querySelector(
            `[data-id="${product.id}"]`
          );
          if(cartIcon) cartIcon.classList.add("item__added__background");
        });
      }
    }
    , [cart, products]);
    
    
        //function to add the class fav__added__background to the buy icon when the products are rendered if they are already in favs. That way even if the page is refreshed, the icon will indicate that the product is already in favs.
        useEffect(() => {
        if (favs) {
          favs.forEach((fav) => {
            const favIcon = document.querySelector(`[fav-id="${fav.id}"]`);
            if (favIcon) favIcon.classList.add("fav__added__background");
          }
          );
        }
      }
      , [favs, products]);

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
          <Container fluid>
            <Row className="frontPage_container">
              <Col md="4">
                <img src={frontPage1} alt="front models page" />
              </Col>
              <Col md="4">
                <img src={frontPage2} alt="front models page" />
              </Col>
              <Col md="4">
                <img src={frontPage3} alt="front models page" />
              </Col>
            </Row>
          </Container>
          <Row>
            <Col xs="10" className="products__wrapper">
              <Products manageClick={addToCart} manageFav={manageFav} />
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
