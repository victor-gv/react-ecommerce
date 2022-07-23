import { useState, useEffect } from "react";

const useCart = () => {
  /**
   * If the cart exists, return the cart, otherwise return an empty array.
   */
  const loadCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  const [totalCart, setData] = useState(() => loadCart());

  /* Storing the cart in local storage. Every time that totalCart changes, we set that information into localStorage */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(totalCart));
  }, [totalCart]);

  //Obtain the product data from the Products component and pass it to the Cart component
  const addToCart = (product) => {
    //Check if the product is already in the cart. If so, don't add it again.
    if (totalCart.find((item) => item.id === product.id)) {
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
    //Add the product to the cart
    const cartIcon = document.getElementById("cartIcon");

    const cardShopAction = document.querySelector(`[data-id="${product.id}"]`);
    cardShopAction.classList.add("item__added");

    cartIcon.classList.add("product__added");
    setTimeout(() => {
      cartIcon.classList.remove("product__added");
    }, 500);
    setData([...totalCart, product]);
  };

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
          if (cardShopAction) cardShopAction.classList.remove("item__added");
          if (cardShopAction)
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
        if (cardShopAction) cardShopAction.classList.remove("item__added");
        if (cardShopAction)
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

  return {
    addToCart,
    totalCart,
    setData,
    addQuantity,
    substractQuantity,
    removeProduct,
    totalPrice,
    totalQuantity,
    setTotalQuantity,
  };
};

export default useCart;
