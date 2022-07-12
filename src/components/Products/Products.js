import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard'
// import img_1 from '../../src/img/img_1.jpeg'
// import img_2 from '../../src/img/img_2.jpeg'
// import img_3 from '../../src/img/img_3.jpeg'
// import img_4 from '../../src/img/img_4.jpeg'
// import img_5 from '../../src/img/img_5.jpeg'
// import img_6 from '../../src/img/img_6.jpeg'
// import img_7 from '../../src/img/img_7.jpeg'
// import img_8 from '../../src/img/img_8.jpeg'
// import img_9 from '../../src/img/img_9.jpeg'
import './Products.css'


function Products(props) {

const url = 'http://localhost:5000/products';

const [ counter, setCounter ] = useState(0);
const [ products, setProducts ] = useState([]);
const [ error, setError ] =useState(false);
const [ loading, setLoading ] = useState(false);

useEffect(() => {
    setError(false)
    setLoading(true)
  const fetchData = async() => {
    try {
      const response = await fetch(url);
      const products = await response.json()
      setProducts(products)
    }
    catch (error) {
      setError(true)
    }
    setLoading(false);
  }
  fetchData();
}, [ url ]);



  return (
    <>
      <hr></hr>
      <h1 className='products__title'>Products</h1>
      <hr></hr>
      <div className='products__container'>
        { products.map( product =>
          (
            <ProductCard key = {product.id}>
                <img className='card__img' src={product.img} alt={product.title} />
                <h3 className='card__title'>{product.title}</h3>
                <h4 className='card__price'>{product.price}€</h4>
                <button className='buy-btn' onClick={() => props.manageClick(product)}>Buy now</button>
            </ProductCard>
          )
        )}
        </div>
    </>
  )
}

export default Products