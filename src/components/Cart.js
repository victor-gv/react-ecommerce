import React from 'react'
import '../styles/Cart/cart.css'

const Cart = ({title, price, img, addProduct, substractProduct, numberOfProducts, totalPrice, reset}) => {
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
                  <div className="buttons-container">
                      <button className='buttons-quantity' onClick={substractProduct}>-</button>
                      <button className='numberOfProducts'>{numberOfProducts}</button>
                      <button className='buttons-quantity' onClick={addProduct}>+</button>
                  </div>
                 
                  <button className="btn btn-dark" onClick={reset}>Remove</button>
                </div>
          </div>
          <hr></hr>
          <h2>Total: {totalPrice}€</h2>
          <hr></hr>
          <button className="btn btn-primary btn-block btn-lg">Checkout</button>
      </div>

    </>
  )
}


export default Cart