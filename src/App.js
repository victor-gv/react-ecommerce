import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import './App.css'
import ProductItem from "./components/ProductItem";


function App() {
  

  // We set the initial state of the cart to an empty object
  const [ProductData, setData] = useState([]);

//Obtain the product data from the Products component and pass it to the Cart component
  const addToCart = (product) => {
    //Check if the product is already in the cart. If so, don't add it again.
    if (ProductData.find(item => item.id === product.id)) {
      return;
    }
    //Add the product to the cart
    const allProductsInCart = [...ProductData, product];
    setData(allProductsInCart);
  }




/**
 * Remove the product from the array of products in the cart.
 * @param product - the product that is being removed from the cart
 */
  const removeFromCart = (product) => {
    const allProductsInCart = [...ProductData];
    const index = allProductsInCart.indexOf(product);
    allProductsInCart.splice(index, 1);
    setData(allProductsInCart);
  }



  const checkCart = () => {
      return (
       ProductData.map(product =>
           <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            //addQuantity={addQuantity}
            // substractProduct={removeProduct}
            // numberOfProducts={numberOfProducts}
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