import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import ProductItem from "./components/ProducItem/ProductItem";
import Header from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import './App.css'




/**
 * If the cart exists, return the cart, otherwise return an empty array.
 */
  const loadCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  }


function App() {
  const [totalCart, setData] = useState(() => loadCart());

/* Storing the cart in local storage. Every time that totalCart changes, we set that information into localStorage */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(totalCart));
  }, [totalCart]);


//Obtain the product data from the Products component and pass it to the Cart component
  const addToCart = (product) => {
    //Check if the product is already in the cart. If so, don't add it again.
    if (totalCart.find(item => item.id === product.id)) {
      return;
    }
    //Add the product to the cart
    setData([...totalCart, product]);
  }


/**
 * If the id of the item in the array matches the id of the item that was clicked, then increment the
 * quantity of that item by 1 when the user clicks on add quantity button.
 * @param id - the id of the product
 */
  const addQuantity = (id) => {
    const newCart = totalCart.map(item => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    }
    );
    setData(newCart);
  }


/**
 * If the item id matches the id passed in and the quantity is greater than 1, then decrement the
 * quantity by 1 when the user clicks on substract quantity button..
 */
const substractQuantity = (id) => {
  const newCart = totalCart.map(item => {
    if (item.id === id && item.quantity > 1) {
      item.quantity--;
    }
    return item;
  });
  setData(newCart);
}



//Remove a product from the cart when the user clicks on the remove button and reset its quantity to 1
  const removeProduct = (id) => {
  const newCart = [...totalCart];
  newCart.map(item => {
    if (item.id === id){
      item.quantity = 1;
      const index = newCart.indexOf(item);
      newCart.splice(index, 1);
    }
    return item;
  });
    setData(newCart);
  }


  //Set the sum aff all products in the cart taking into account the quantity selected, and display it in the total price element of the cart
  const [totalPrice, setTotalPrice] = useState();
  useEffect(() => {
    const total = totalCart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  }
  , [totalCart]);





/**
 * CheckCart() is a function that returns a map of the totalCart array, which is an array of objects,
 * and maps each object to a ProductItem component, which is a component that renders a product item.
 * @returns The return statement is returning the result of the map function.
 */
  const checkCart = () => {
      return (
       totalCart.map(product =>
           <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.img}
            addQuantity={addQuantity}
            substractQuantity ={substractQuantity}
            quantity={product.quantity}
            totalPrice={totalPrice}
            removeProduct = {removeProduct}
            />
      )
    );
}


/* A ternary operator that checks if the length of the totalCart array is 0. If it is, it renders the
Cart component with the title 'Your cart is empty' and the totalPrice is 0. If the length of the
totalCart array is not 0, it renders the Cart component with the title '', the totalPrice is the
totalPrice of the cart, and the productItem is the result of the checkCart() function. */
  const ListLength = totalCart.length;
  return (
    <>
    <div className="App">
        <Header />
        <div className="main-container">
          <Products manageClick = {addToCart} />
          {ListLength === 0 ? <Cart title={'Your cart is empty'} totalPrice={0} /> : <Cart title={''} totalPrice={totalPrice} productItem={checkCart()} />}
        </div>
    </div>
    </>
  )
}

export default App;