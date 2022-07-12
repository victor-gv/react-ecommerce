import React from 'react'
import { useState, useEffect } from 'react';
import { Spinner } from "react-bootstrap";
import ProductCard from '../ProductCard/ProductCard'
import './Products.css'


function Products(props) {

const url = 'http://localhost:5000/products';

const [ products, setProducts ] = useState([]);
const [ error, setError ] = useState(false);
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
      { loading ? <Spinner animation="border" variant="primary" /> : null }
      { error ? <p>Error</p> : null}
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