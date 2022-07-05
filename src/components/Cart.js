import React from 'react'
import '../styles/Chart/chart.css'
import img1 from '../img/img_1.jpeg'

const Chart = ({title, price, img}) => {
  return (
    <>
      <div className="cart">
          <h1>Shopping Cart</h1>
          <hr></hr>
          <div className="cart__product">
            <img src={img1} alt="" />
                <div className="cart__product--info">
                  <h3>{title}</h3>
                  <h3>{price}</h3>
                  <button >-</button>
                  <button >1</button>
                  <button >+</button>
                  <button className='removeBtn'>Remove</button>
                </div>
          </div>
          <hr></hr>
          <h2>Total: 0€</h2>
          <hr></hr>
          <button>Checkout</button>
      </div>

    </>
  )
}


export default Chart