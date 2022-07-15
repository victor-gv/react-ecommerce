import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BsHandbagFill } from "react-icons/bs";
import errorImg from "../../images/error-404.png";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

function Products(props) {
  const url = "http://localhost:5000/products";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return (
    <>
      <div className="title__row">
        <h2 className="products__title">All Products</h2>
        <select>
          <option value="">Default Shorting</option>
          <option value="">Short by price</option>
          <option value="">Short by popularity</option>
          <option value="">Short by rating</option>
          <option value="">Short by sale</option>
        </select>
      </div>
      <div className="products__container">
        {loading ? (
          <Spinner className="spinner" animation="border" variant="primary" />
        ) : null}
        {error ? (
          <>
            <img
              className="error-img"
              src={errorImg}
              alt="error message"
            />
          </>
        ) : null}
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.img} alt={product.title} />
            <h4 className="card__title">{product.title}</h4>
            <span className="card__description">Summer outfits</span>
            <div className="card__shop">
              <span className="card__shop__price">{product.price}€</span>
              <button
                data-id={product.id}
                className="card__shop__action"
                onClick={() => props.manageClick(product)}
              >
                <BsHandbagFill className="card__button" />
              </button>
            </div>
          </ProductCard>
        ))}
      </div>
    </>
  );
}


export default Products;
