import React from "react";
import { useEffect, useState } from "react";
import NavbarLogin from "../NavbarLogin/NavbarLogin";
import Cart from "../Cart/Cart";
import ProductItem from "../ProducItem/ProductItem";
import emptyCartImg from '../../images/empty_cart.png'
import './LoginPage.css'


const loadCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

function LoginPage() {

  const [totalCart, setData] = useState(() => loadCart());
  console.log(totalCart);

  /* Storing the cart in local storage. Every time that totalCart changes, we set that information into localStorage */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(totalCart));
  }, [totalCart]);


  /**
   * If the id of the item in the array matches the id of the item that was clicked, then increment the
   * quantity of that item by 1 when the user clicks on add quantity button.
   * @param id - the id of the product
   */
  const addQuantity = (id) => {
    const newCart = totalCart.map((item) => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setData(newCart);
  };



  /**
   * If the item id matches the id passed in and the quantity is greater than 1, then decrement the
   * quantity by 1 when the user clicks on substract quantity button..
   */
  const substractQuantity = (id) => {
    const newCart = [...totalCart];
    newCart.map((item) => {
      const cardShopAction = document.querySelector(`[data-id="${item.id}"]`);
      if (item.id === id) {
        item.quantity--;
        
        //If the quantity is less than 1, remove the item from the cart
        if (item.quantity < 1) {
          item.quantity = 1;
          const index = newCart.indexOf(item);
          newCart.splice(index, 1);
          cardShopAction.classList.remove("item__added");
          cardShopAction.classList.remove("item__added__background");
        }
      }
      return item;
    });
    setData(newCart);
  };



  //Remove a product from the cart when the user clicks on the remove button and reset its quantity to 1
  const removeProduct = (id) => {
    const newCart = [...totalCart];
    newCart.map((item) => {
      const cardShopAction = document.querySelector(`[data-id="${item.id}"]`);
      if (item.id === id) {
        item.quantity = 1;
        const index = newCart.indexOf(item);
        newCart.splice(index, 1);
        cardShopAction.classList.remove("item__added");
        cardShopAction.classList.remove("item__added__background");
      }
      return item;
    });
    setData(newCart);
  };



  //Set the sum aff all products in the cart taking into account the quantity selected, and display it in the total price element of the cart
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    const total = totalCart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [totalCart]);




  //Set the total quantity of products of the cart to display it in navbar icon
  const [totalQuantity, setTotalQuantity] = useState();
  useEffect(() => {
    const total = totalCart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalQuantity(total);
  }, [totalCart]);



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



  const ListLength = totalCart.length;
  return (
    <>
    <NavbarLogin />
    {ListLength === 0 ? (
                <Cart title={"Your cart is empty."} totalPrice={0} emptyCartImg = {<img className='empty__cart' src={emptyCartImg} alt="Sad empty cart"/>} />
              ) : (
                <Cart
                  title={""}
                  totalPrice={totalPrice}
                  productItem={checkCart()}
                />
              )}
    </>
  );
}

export default LoginPage;
