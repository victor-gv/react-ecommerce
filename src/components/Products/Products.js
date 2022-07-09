import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import products from '../../data/productsList'
import './Products.css'


function Products(props) {

  return (
    <>
      <div className='products__container'>
      <h1>Products</h1>
        { products.map(product =>
          (
            <ProductCard key = {product.id}>
                <img className='card__img' src={product.img} alt={product.title} />
                <h3>{product.title}</h3>
                <h4>{product.price}€</h4>
                <button className='buy-btn' onClick={() => props.manageClick(product)}>Buy now</button>
            </ProductCard>
          )
        )}
        </div>
    </>
  )
}

export default Products