import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import './App.css'


function App() {

  const [productData, setData] = useState({
    title: "Your chart is empty",
    price: 0
  });


  const showCart = (product) => {
    setData({
      ...productData,
      title: product.title,
      price: product.price
    })

  }

  return (
    <>
    <div className="App">
        <Products manageClick = {showCart} />
        <Cart 
          title = {productData.title}
          price = {productData.price + "€"} 
        />
    </div>
    </>
  )
}

export default App;