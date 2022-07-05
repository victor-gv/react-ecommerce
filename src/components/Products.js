import React from 'react'
import ProductCard from './ProductCard'
import products from '../productsList'
import '../styles/Products/Products.css'

function Products() {

  return (
    <>
      <div className='products__container'>
      <h1>Products</h1>
        { products.map(product => 
          (
            <ProductCard>
                <img className='card__img' src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>{product.price}€</h4>
                <button className='btn'>Buy now</button>
            </ProductCard>
          )
        )}
        </div>
    </>
  )
}

export default Products