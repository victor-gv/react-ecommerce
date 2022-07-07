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


/**
 * If the id of the item in the array matches the id of the item that was clicked, then increment the
 * quantity of that item by 1 when the user clicks on add quantity button.
 * @param id - the id of the product
 */
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
 * If the item id matches the id passed in and the quantity is greater than 0, then decrement the
 * quantity by 1 when the user clicks on substract quantity button..
 */
const substractQuantity = (id) => {
  const newCart = ProductData.map(item => {
    if (item.id === id && item.quantity > 0) {
      item.quantity--;
    }
    return item;
  });
  setData(newCart);
}



//Remove a product from the cart and reset its quantity to 0
  const removeProduct = (id) => {
  const newCart = [...ProductData];
  newCart.map(item => {
    if (item.id === id){
      item.quantity = 0;
      const index = newCart.indexOf(item);
      newCart.splice(index, 1);
    }
    return item;
  });
    setData(newCart);
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
            addQuantity={addQuantity}
            substractQuantity ={substractQuantity}
            quantity={product.quantity}
            // totalPrice={totalPrice}
            removeProduct = {removeProduct}
            />
      )
    );
}


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