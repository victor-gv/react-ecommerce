import React from 'react'
import './ProductCard.css'

function ProductCard(props) {
  return (
    <>
      <div className="card">
        {props.children}
      </div>
    </>
  )
}

export default ProductCard