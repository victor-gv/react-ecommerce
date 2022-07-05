import React from 'react'
import '../styles/Cart/cart.css'

const Cart = ({title, price, img, addProduct, substractProduct, numberOfProducts, totalPrice}) => {
  return (
    <>
      <div className="cart">
          <h1>Shopping Cart</h1>
          <hr></hr>
          <div className="cart__product">
            <img src={img} alt="" />
                <div className="cart__product--info">
                  <h3>{title}</h3>
                  <h3>{price}€</h3>
                  <button onClick={substractProduct}>-</button>
                  <button >{numberOfProducts}</button>
                  <button onClick={addProduct}>+</button>
                  <button className='removeBtn'>Remove</button>
                </div>
          </div>
          <hr></hr>
          <h2>Total: {totalPrice}€</h2>
          <hr></hr>
          <button>Checkout</button>
      </div>

    </>
  )
}


export default Cart