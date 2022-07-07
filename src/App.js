import Products from "./components/Products";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import './App.css'
import ProductItem from "./components/ProductItem";




/**
 * If the cart exists, return the cart, otherwise return an empty array.
 */
  const loadCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }


function App() {
  const [ProductData, setData] = useState(() => loadCart());

/* Storing the cart in local storage. */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(ProductData));
  }, [ProductData]);


//Obtain the product data from the Products component and pass it to the Cart component
  const addToCart = (product) => {
    //Check if the product is already in the cart. If so, don't add it again.
    if (ProductData.find(item => item.id === product.id)) {
      return;
    }
    //Add the product to the cart and store it in local storage
    setData([...ProductData, product]);
    localStorage.setItem("cart", JSON.stringify([...ProductData, product]));
  }


  const addQuantity = (id) => {
    const newCart = ProductData.map(item => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    }
    );
    setData(newCart);
  }


/**
 * Remove the product from the array of products in the cart.
 * @param product - the product that is being removed from the cart
 */
  const removeFromCart = (product) => {
    const cart = [...ProductData];
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    setData(cart);
  }



  const checkCart = () => {
    console.log(ProductData);
      return (
       ProductData.map(product =>
           <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            addQuantity={addQuantity}
            quantity={product.quantity}
            // substractProduct={removeProduct}
            // totalPrice={totalPrice}
            reset = {removeFromCart}
            />
      )
    );
}


  //Function to reset the cart when the user clicks on the "Remove" button
  // const reset = () => {
  //   setData({
  //     title: "Your cart is empty",
  //     price: 0
  //   });
  //   setTotalPrice(0);
  //   setNumberOfProducts(0);
  // }

  const ListLength = ProductData.length;
  return (
    <>
    <div className="App">
        <Products manageClick = {addToCart} />
        {ListLength === 0 ? <Cart title={'Your cart is empty'} /> : <Cart title={''} productItem={checkCart()} />}
    </div>
    </>
  )
}

export default App;