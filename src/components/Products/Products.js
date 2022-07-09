import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import products from '../../data/productsList'
import './Products.css'


function Products(props) {

  return (
    <>
      <hr></hr>
      <h1 className='products__title'>Products</h1>
      <hr></hr>
      <div className='products__container'>
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