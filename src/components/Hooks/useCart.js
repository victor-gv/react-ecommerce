import { useState, useEffect, useReducer } from "react";
import cartReducer from "../Cart/CartReducer/CartReducer";

const useCart = () => {
  

  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("cart")) || initialState;
  };

  const [cart, dispatch] = useReducer(cartReducer, initialState, init); // add init function to the useReducer hook to initialize the state

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
     //Check if the product is already in the cart. If so, don't add it again.
     if (cart.find((item) => item.id === product.id)) {
      //If the product is already in the cart and the user clicks on the buy button again, we open the cart to let the user add more quantity of the product.
      const mainPage = document.getElementById("mainPage");
      const loginPage = document.getElementById("loginPage");
      const favPage = document.getElementById("favPage");
      const productPage = document.getElementById("productPage");
      const footer = document.getElementById("footer");
      const cart = document.getElementById("cart");
      if (mainPage) mainPage.classList.add("blur");
      if (loginPage) loginPage.classList.add("blur");
      if (favPage) favPage.classList.add("blur");
      if (productPage) productPage.classList.add("blur");
      if (cart) cart.classList.add("cart-open");
      if (footer) footer.classList.add("hidden");
      return;
    }

/* Adding a class to the cart icon and the product card to indicate the user that the product has been added */
    const cartIcon = document.getElementById("cartIcon");
    const cardShopAction = document.querySelector(`[data-id="${product.id}"]`);
    cardShopAction.classList.add("item__added");

    cartIcon.classList.add("product__added");
    setTimeout(() => {
      cartIcon.classList.remove("product__added");
    }, 500);

    const action = {
      type: "add to cart",
      payload: product,
    };
    dispatch(action);
  };

    const addQuantity = (id) => {
      const action = {
        type: "add quantity",
        payload: id,
      };
      dispatch(action);
    }


    const substractQuantity = (id) => {
      if (cart.find((item) => item.id === id).quantity > 1) {
        const action = {
          type: "substract quantity",
          payload: id,
        };
        dispatch(action);
      } else {
        removeProduct(id);
      }
    }


    const removeProduct = (id) => {
      const action = {
        type: "remove product",
        payload: id,
      };
      dispatch(action);
    }




  //Set the sum aff all products in the cart taking into account the quantity selected, and display it in the total price element of the cart
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  //Set the total quantity of products of the cart to display it in navbar icon
  const [totalQuantity, setTotalQuantity] = useState();
  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalQuantity(total);
  }, [cart]);



//function to add the class item__added__background to the buy icon when the products are rendered if they are already in the cart. That way, even if the page is refreshed, the icon will indicate that the product is already in the cart.
useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.forEach((product) => {
      const cartIcon = document.querySelector(`[data-id="${product.id}"]`);
      if (cartIcon) cartIcon.classList.add("item__added__background");
    });
  }
}, [cart]);

  return {
    addToCart,
    addQuantity,
    substractQuantity,
    removeProduct,
    cart,
    totalPrice,
    totalQuantity,
  };
};

export default useCart;
