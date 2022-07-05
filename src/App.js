import Products from "./components/Products";
import Cart from "./components/Cart";
import './App.css'


function App() {

  const showCart = (product) => {
    let title = product.title;
    console.log(title);
  }

  return (
    <>
    <div className="App">
        <Products manageClick = {showCart} />
        <Cart />
    </div>
    </>
  )
}

export default App;