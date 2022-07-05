import React from 'react'
import '../styles/ProductCard/ProductCard.css'

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