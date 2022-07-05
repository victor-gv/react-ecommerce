import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import './App.css'


function App() {
  // We set the initial state of the cart to an empty object
  const [productData, setData] = useState({
    title: "Your cart is empty",
    price: 0
  });

//Obtain the product data from the Products component and pass it to the Cart component
  const showCart = (product) => {
    setData({
      ...productData,
      title: product.title,
      price: product.price,
      img: product.img
    });

    setTotalPrice(product.price);
  }



  // Function to manage the cart, adding or removing products from the cart, also calculating the total price
  const [totalPrice, setTotalPrice] = useState(productData.price);
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const addProduct = () => {
    setNumberOfProducts(numberOfProducts + 1);
    setTotalPrice(totalPrice + productData.price);
  }

  const removeProduct = () => {
    setNumberOfProducts(numberOfProducts - 1);
    setTotalPrice(totalPrice - productData.price);

    // If the number of products is 0, the user can't remove more number of products
    if (numberOfProducts === 0) {
      setNumberOfProducts(0);
    }

    // If the total price is 0, the user can't remove more number of products
    if (totalPrice === 0) {
      setTotalPrice(0);
    }
  }

  //If the user clicks on the "Buy now" button, the product data is passed to the Cart component, and the Cart component is displayed
  const checkCart = () => {
    if (productData.title === "Your cart is empty") {
      return (
        <>
        <div className="cart">
            <h1>Shopping Cart</h1>
            <hr></hr>
            <div className="cart__product">
                  <div className="cart__product--info">
                    <h2>{productData.title}</h2>
                  </div>
            </div>
            <h2>Total: 0€</h2>
            <hr></hr>
            <button>Checkout</button>
        </div>
      </>
      );
    } else {
      return (
        <Cart
          title={productData.title}
          price={productData.price}
          img={productData.img}
          addProduct={addProduct}
          substractProduct={removeProduct}
          numberOfProducts={numberOfProducts}
          totalPrice={totalPrice}
        />
      );
    }
  }


  return (
    <>
    <div className="App">
        <Products manageClick = {showCart} />
        {checkCart()}
    </div>
    </>
  )

  
}

export default App;